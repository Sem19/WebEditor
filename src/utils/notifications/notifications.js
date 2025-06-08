import { toast } from "react-toastify";

export const notify = ({ message, type }) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      console.log("Unknown notify.");
  }
};
