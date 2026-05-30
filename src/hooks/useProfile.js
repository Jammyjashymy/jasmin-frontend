import { useEffect, useState } from "react";
import API from "../api/portfolioApi";

const useProfile = () => {

  const [image, setImage] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {

    const response =
      await API.get("/profile");

    setImage(response.data.image);

  };

  return image;
};

export default useProfile;