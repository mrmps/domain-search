"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function SquareTextarea() {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasContent, setHasContent] = React.useState(false);
  const router = useRouter();

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    adjustHeight();
    // Optionally, adjust height on window resize or other factors
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    setHasContent(event.target.value.length > 0);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleButtonClick = () => {
    if (hasContent) {
      const query = textareaRef.current?.value;
      router.push(`/search?q=${query}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.value += '\n';
        adjustHeight(); // Adjust height after adding a new line
      }
    } else if (event.key === 'Enter' && !event.metaKey) {
      event.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative max-w-2xl w-full">
        <Textarea
          ref={textareaRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="min-h-[110px] w-full focus-visible:ring-0 border-zinc-300 focus-visible:border-zinc-300 focus-visible:border-2"
          style={{ overflow: "hidden", resize: "none", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}
        />
        <Button
          variant="outline"
          onClick={handleButtonClick}
          className={`absolute right-3 bottom-3  border-none rounded-full h-8 w-8 ${
            hasContent
              ? "text-white bg-[#54A285] hover:bg-[#54A285]/90 hover:text-white"
              : "text-zinc-400 bg-zinc-200 cursor-not-allowed hover:bg-zinc-200 hover:text-zinc-400"
          }`}
          style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}
          size="icon"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
