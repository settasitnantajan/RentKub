import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CampingSchema } from "@/utils/schemas";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap";
import { createCamping } from "@/api/camping";

// clerk
import { useAuth } from "@clerk/clerk-react";
import FormUploadImage from "@/components/form/FormUploadImage";

const Camping = () => {
  // clerk
  const { getToken, userId } = useAuth();

  const { register, handleSubmit, formState, setValue, reset } = useForm({
    resolver: zodResolver(CampingSchema),
  });
  const { errors, isSubmitting } = formState;

  const hdlSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    console.log(data);
    createCamping(token, data)
      .then((req) => {
        console.log(req.data);
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">Create Camping</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="Input Your Title"
              errors={errors}
            />

            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
              errors={errors}
            />

            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder="Input Your Description"
              errors={errors}
            />

            <div>
              <CategoryInput
                name="category"
                register={register}
                setValue={setValue}
              />
              <FormUploadImage setValue={setValue} />
            </div>
          </div>

          <Mainmap register={register} setValue={setValue} />

          <Buttons text="create camping" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  );
};
export default Camping;
