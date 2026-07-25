import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";
import User from "../models/mongo/user.model.js";

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
      async (error, result) => {
        try {
          if (error) {
            return reject(error);
          }

          // Save resume details in MongoDB
          await User.findByIdAndUpdate(user.id, {
            resumeUrl: result.secure_url,
            resumePublicId: result.public_id,
          });

          resolve({
            filename: file.originalname,
            uploadedBy: user.id,
            resumeUrl: result.secure_url,
            publicId: result.public_id,
          });
        } catch (err) {
          reject(err);
        }
      }
    );

    Readable.from(file.buffer).pipe(uploadStream);
  });
};