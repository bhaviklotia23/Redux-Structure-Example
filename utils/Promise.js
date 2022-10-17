import toast from "react-hot-toast";

export const PromiseData = (API, Message) => {
  const apiPromise = API;
  toast.promise(apiPromise, {
    loading: "Loading In...",
    success: Message.success,
    error: Message.error,
  });
  return apiPromise;
};
