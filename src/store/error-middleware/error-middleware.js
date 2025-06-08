import { isRejectedWithValue } from "@reduxjs/toolkit";
import { notify } from "../../utils/notifications/notifications";

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  if (!isRejectedWithValue(action)) return next(action);

  notify({
    message: action?.payload?.data?.message,
    type: "error",
  });

  return next(action);
};
