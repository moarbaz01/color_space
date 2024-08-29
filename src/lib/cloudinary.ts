import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  account_id: process.env.CLOUDINARY_ACCOUNT_ID,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

export default cloudinary;
