import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";

export const uploadResume = async (file, user) => {
  if (!file) {
    throw new Error("Resume file is required");
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "TalentBoardX/resumes",
        resource_type: "raw",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          filename: file.originalname,
          uploadedBy: user.id,
          resumeUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    Readable.from(file.buffer).pipe(uploadStream);
  });
};