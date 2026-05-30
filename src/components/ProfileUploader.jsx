import { useEffect, useState } from "react";
import API from "../api/portfolioApi";

const ProfileUploader = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfileImage();
  }, []);

  const getProfileImage = async () => {
    try {
      const response = await API.get("/profile");

      if (response.data.image) {
        setImage(response.data.image);
      }
    } catch (error) {
      console.log("Fetch Image Error:", error);
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", file);

      const response = await API.post(
        "/profile/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.image) {
        setImage(response.data.image);
      }

      setLoading(false);

    } catch (error) {

      console.log("Upload Error:", error);

      setLoading(false);

    }
  };

  return (
    <div className="flex flex-col items-center">

      <label className="cursor-pointer">

        <img
          src={
            image ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="
            w-14
            h-14
            rounded-full
            object-cover
            border-4
            border-[#FF6F61]
            hover:scale-105
            transition
            duration-300
          "
        />

        <input
          type="file"
          hidden
          accept="image/*"
          onChange={uploadImage}
        />

      </label>

      {loading && (
        <p className="text-xs text-[#FF6F61] mt-2">
          Uploading...
        </p>
      )}

    </div>
  );
};

export default ProfileUploader;