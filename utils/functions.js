// bcryptjs
import { compare, hash } from "bcryptjs";
// file-resizer
import FileResizer from "react-image-file-resizer";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const shorterText = (text, maxCharacter) => {
  if (String(text).length > maxCharacter) {
    return `${text.substring(0, maxCharacter)}`;
  } else {
    return text;
  }
};

export const resizeFile = (file) =>
  new Promise((resolve) => {
    FileResizer.imageFileResizer(
      file,
      1500,
      1500,
      "JPEG",
      50,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

export const uploadImage = async (path) => {
  const cloudName = process.env.NEXT_PUBLIC_COUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_COUDINARY_UPLOAD_PRESET;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();

  formData.append("file", path);
  formData.append("upload_preset", uploadPreset);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return { imageUrl: data.secure_url };
  } catch (error) {
    return {
      imageUrl: null,
    };
  }
};
