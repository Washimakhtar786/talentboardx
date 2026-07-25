export const uploadResume = async (file, user) => {
  if (!file) {
    throw new Error("Resume file is required");
  }

  return {
    filename: file.originalname,
    uploadedBy: user.id,
  };
};