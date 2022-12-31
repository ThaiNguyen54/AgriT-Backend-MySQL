import cloudinary from "cloudinary";
import dotenv from "dotenv";

const cloudinaries = cloudinary.v2;
dotenv.config();


cloudinaries.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
})

export default cloudinaries;