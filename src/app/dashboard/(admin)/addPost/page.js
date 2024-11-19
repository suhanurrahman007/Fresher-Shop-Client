"use client";
import { useForm } from "react-hook-form";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "@/components/hooks/useAuth";
import SectionTitle from "@/components/share/SectionTitle";
import { cn } from "@/components/ui/utils/cn";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AddPost = () => {
  const publicAxios = usePublicAxios();
  const router = useRouter();
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const postInfo = {
      name: user?.displayName,
      userImg: user?.photoURL,
      title: data?.title,
      description: data?.description,
      category: data?.category,
      image: data?.image,
      tag: data.tag,
    };

    console.log(postInfo);

    const res = await publicAxios.post("/posts", postInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Successfully Post here");
      router.push("/blog");
    }
  };

  return (
    <div className="py-8 bg-[#010313] overflow-x-auto 2xl:h-screen 2xl:py-36">
      <SectionTitle
        header={"Add Post"}
        miniHeader={"User any post added here"}
      ></SectionTitle>

      <div className="px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="form-control">
              <LabelInputContainer>
                <Label htmlFor="title">
                  Post Title <span className="text-red-700">*</span>
                </Label>
                <Input
                  id="title"
                  {...register("title", { required: true })}
                  placeholder="Enter your Post Title"
                  type="text"
                />
              </LabelInputContainer>
            </div>

            <div className="form-control">
              <LabelInputContainer>
                <Label htmlFor="image">
                  Post Image <span className="text-red-700">*</span>
                </Label>
                <Input
                  id="image"
                  {...register("image", { required: true })}
                  placeholder="Enter your Post Image"
                  type="url"
                />
              </LabelInputContainer>
            </div>

            <div className="form-control w-full my-6">
              <LabelInputContainer>
                <Label htmlFor="category">
                  Category <span className="text-red-700">*</span>
                </Label>
                <select
                  id="category"
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select bg-[#0D0D21] text-white select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="Air Cargo News">Air Cargo News</option>
                  <option value="Distribution/Materials">
                    Distribution/Materials
                  </option>
                  <option value="Logistics Planner">Logistics Planner</option>
                  <option value="Supply Chain Research">
                    Supply Chain Research
                  </option>
                  <option value="Transport Digest">Transport Digest</option>
                  <option value="World Expert Insight">
                    World Expert Insight
                  </option>
                </select>
              </LabelInputContainer>
            </div>

            <div className="form-control w-full my-6">
              <LabelInputContainer>
                <Label htmlFor="tag">
                  Tags <span className="text-red-700">*</span>
                </Label>
                <select
                  id="tag"
                  defaultValue="default"
                  {...register("tag", { required: true })}
                  className="select bg-[#0D0D21] text-white select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Tag
                  </option>
                  <option value="Logistics">Logistics</option>
                  <option value="Electric">Electric</option>
                  <option value="Heating">Heating</option>
                  <option value="Ideas">Ideas</option>
                  <option value="Interior">Interior</option>
                  <option value="Repair">Repair</option>
                </select>
              </LabelInputContainer>
            </div>
          </div>
          <div className="form-control">
            <LabelInputContainer>
              <Label htmlFor="description">
                Post Description <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="description"
                {...register("description", { required: true })}
                placeholder="Enter your Post Description"
                className="textarea bg-[#0D0D21] textarea-bordered placeholder:text-xs"
              />
            </LabelInputContainer>
          </div>

          <div className="form-control mt-6">
            <button
              className="bg-gradient-to-br relative group/btn from-blue-900 to-blue-900  block bg-blue-800 w-full text-white rounded-md h-10 font-medium,0px_-1px_0px_0px_#ffffff40_inset] shadow-[0px_1px_0px_0px_var(--blue-800)_inset,0px_-1px_0px_0px_var(--blue-800)_inset]"
              type="submit"
            >
              Add Post &rarr;
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;


export const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};