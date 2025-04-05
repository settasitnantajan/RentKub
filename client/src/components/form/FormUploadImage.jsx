import { resizeFile } from "@/utils/resizeimages";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { uploadImage } from "@/api/uploadfile";
import { useAuth } from "@clerk/clerk-react";

const FormUploadImage = () => {
  const { getToken } = useAuth();

  const hdlOnChange = async (e) => {
    const token = await getToken();
    const file = e.target.files[0];
    if (!file) return;
    try {
      const resizedImage = await resizeFile(file);
      const res = await uploadImage(token, resizedImage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Label>Upload Image</Label>
      <div>
        <Input type="file" onChange={hdlOnChange} />
      </div>
    </div>
  );
};
export default FormUploadImage;
