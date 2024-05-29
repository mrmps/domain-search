"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SquareTextarea() {
  const searchParams = useSearchParams();

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasContent, setHasContent] = React.useState(false);
  const [text, setText] = React.useState('');

  const {replace}= useRouter();

  React.useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setText(query);
    }
  }, [searchParams]);

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      if (isFocused) {
        textarea.style.height = `${textarea.scrollHeight}px`;
      } else {
        textarea.style.height = "auto";
      }
    }
  }, [isFocused]);

  React.useEffect(() => {
    adjustHeight();
    // Optionally, adjust height on window resize or other factors
  }, [isFocused, adjustHeight]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    adjustHeight();
    setHasContent(event.target.value.length > 0);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasContent) {
      const formData = new FormData(event.currentTarget);
      replace('/search?q=' + formData.get('q'));
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
      const form = event.currentTarget.form;
      form && form.requestSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex justify-center items-center">
      <div className="relative max-w-2xl w-full shadow-sm">
        <Textarea
          ref={textareaRef}
          name="q"
          value={text}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full focus-visible:ring-0 border-zinc-300 focus-visible:border-zinc-300 focus-visible:border-2"
          style={{ overflow: "hidden", resize: "none", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}
          placeholder="A thorough description of your company or product, or some keywords..."
        />
        <Button
          type="submit"
          variant="outline"
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
    </form>
  );
}
