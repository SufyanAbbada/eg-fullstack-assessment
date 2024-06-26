import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InvalidPath: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("No match found for this route. Redirecting back to Homepage");
    navigate("/", { replace: true }); // History is replaced to refrain the user from going back
  }, [navigate]);

  return null;
};

export default InvalidPath;
