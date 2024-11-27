import { useState } from "react";
import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/ui/LabelInputContainer";
import { TextArea } from "@/components/ui/textArea";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RatingComment = ({
  findProduct,
  userRating,
  setOpenModal,
  ratingsRefetch,
}) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const publicAxios = usePublicAxios();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const commentInfo = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      comment: data?.comment,
      postId: findProduct?._id,
      like: 0,
      rating: userRating,
    };

    try {
      const res = await publicAxios.post("/ratings", commentInfo);
      if (res.data.insertedId) {
        toast.success("Successfully submitted rating!");
        setOpenModal(false);
        ratingsRefetch();
      }
    } catch (error) {
      toast.error("Failed to submit rating. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          <LabelInputContainer>
            <Label htmlFor="name">
              Name <span className="text-red-700">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">
              Email <span className="text-red-700">*</span>
            </Label>
            <Input id="email" type="text" defaultValue={user?.email} disabled />
          </LabelInputContainer>
        </div>

        <div className="form-control mt-5">
          <LabelInputContainer>
            <Label htmlFor="comment">
              Review Comment <span className="text-red-700">*</span>
            </Label>
            <TextArea
              id="comment"
              {...register("comment", { required: "Comment is required" })}
              placeholder="Enter your Comment"
              className="input bg-[#000C21] input-bordered placeholder:text-sm h-28"
              aria-required="true"
              aria-invalid={errors.comment ? "true" : "false"}
            />
            {errors.comment && (
              <p className="text-red-500 text-sm">{errors.comment.message}</p>
            )}
          </LabelInputContainer>
        </div>

        <div className="form-control mt-6">
          <button
            disabled={isSubmitting}
            className={`relative w-full h-10 text-white rounded-md ${
              isSubmitting ? "bg-gray-500" : "bg-blue-800"
            }`}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Review →"}
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RatingComment;
