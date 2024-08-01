import React, { MouseEventHandler } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton: React.FC<ButtonProps> = ({
  isLoading,
  className,
  children,
  onClick,
}) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn "}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center gap-4 text-whilte">
          <Image
            src="/assets/loading.png"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading ...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
