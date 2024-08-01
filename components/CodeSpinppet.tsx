import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard } from "@/lib/supportFunctions";
import { CodeBlock, dracula } from "react-code-blocks";

export const CodeSnippet = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="relative">
      <button
        className={`absolute top-4 right-8 p-2 bg-gray-700 text-white rounded transition-opacity ${
          isCopied ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => copyToClipboard(code, setIsCopied)}
      >
        <FaCopy />
      </button>
      {isCopied && (
        <div className="absolute top-4 right-8 p-2 bg-gray-700 text-white rounded opacity-100 transition-opacity">
          <div className="flex gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p className="text-sm">Copied!</p>
          </div>
        </div>
      )}
      {/* <Textarea
        className="w-full p-4 border border-dark-500 rounded-lg bg-gray-800 text-white resize-none"
        placeholder="Code snippet"
        value={code}
        readOnly
        style={{ minHeight: "600px", overflow: "auto" }} // Ensure no scrollbar is shown
      /> */}
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={true}
        theme={dracula}
      />
    </div>
  );
};
