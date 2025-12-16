import React, { useEffect, useState } from "react";
import MarkdownContent from "../markdown/Lessons.md?raw";
import ReactMarkdown from "react-markdown";

const LessonLearnt = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(MarkdownContent);
  }, []);
  return (
    <>
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default LessonLearnt;
