import axios from "axios";
import FormData from "form-data";

const upload = async (file: File) => {
  if (!file) throw new Error("File is required");

  const buffer = Buffer.from(await file.arrayBuffer());

  const form = new FormData();
  form.append("file", buffer, {
    filename: file.name,
    contentType: file.type
  });

  const { data } = await axios.post(
    "https://upload.2mathewww.my.id/upload",
    form,
    {
      headers: form.getHeaders(),
      maxBodyLength: Infinity,
      maxContentLength: Infinity
    }
  );

  return data;
};

export default upload;
