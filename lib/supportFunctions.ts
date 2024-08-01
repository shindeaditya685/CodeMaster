import { Bounce, toast } from "react-toastify";

export const copyToClipboard = (text: string, setIsCopied: (value:boolean) => void) => {
  navigator.clipboard.writeText(text).then(
    () => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Show the icon after 3 seconds
    },
    (err) => {
      console.error("Failed to copy text: ", err);
      toast.error(err.message);
    }
  );
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};


export const parseStringfy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
}

export function showToast(isLoading:boolean) {
  if (!isLoading) {
    toast("🦄 You have created your blog!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
}