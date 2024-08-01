import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen gap-4 flex justify-center items-center text-2xl">
      <Image
        className="animate-spin"
        src={"/assets/loading2.png"}
        alt="loading"
        width={30}
        height={30}
      />
      <p>Hang tight! We&apos;re fetching your content...</p>
    </div>
  );
};

export default Loading;
