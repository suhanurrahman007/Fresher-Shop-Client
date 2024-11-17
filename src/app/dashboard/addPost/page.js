"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import SectionTitle from "@/components/share/SectionTitle";

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
    <div className="py-8 bg-base-200 overflow-x-auto 2xl:h-screen 2xl:py-36">
      <SectionTitle
        header={"Add Post"}
        miniHeader={"User any post added here"}
      ></SectionTitle>

      <div className="px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">
                  Post Title <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Enter your Post Title"
                className="input  input-bordered placeholder:text-xs"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">
                  Post Image <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="url"
                {...register("image", { required: true })}
                placeholder="Enter your Post Image"
                className="input  input-bordered placeholder:text-xs"
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text ">
                  Category <span className="text-red-700">*</span>
                </span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select  select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Tag
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
                <option value="Worl Expert Insight">Worl Expert Insight</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text ">
                  Tags <span className="text-red-700">*</span>
                </span>
              </label>
              <select
                defaultValue="default"
                {...register("tag", { required: true })}
                className="select  select-bordered w-full"
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
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">
                Post Description <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder="Enter your Post Description"
              className="textarea textarea-bordered placeholder:text-xs"
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value={"Add Post"}
              className="btn border-none text-white bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
