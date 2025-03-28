import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

// clerk
import { useAuth } from "@clerk/clerk-react";


const Profile = () => {
  // clerk
  const { getToken, userId } = useAuth();
  

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(ProfileSchema),
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const token = await getToken();
    console.log(token);
    console.log(userId);
    data.token = token
    data.userId = userId
  
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);

    await axios
      .post("http://localhost:3000/api/profile", data)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("test error", err.response.data.message);
      });
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semi-bold">create profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="firstname"
              type="text"
              placeholder="input your first name"
              errors={errors}
            />

            <FormInputs
              register={register}
              name="lastname"
              type="text"
              placeholder="input your last name"
              errors={errors}
            />

            <Buttons text="create profile" isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
