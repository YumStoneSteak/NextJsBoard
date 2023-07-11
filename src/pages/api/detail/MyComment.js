"use client";

import { useState } from "react";

export default function MyComment() {
  const [comment, setComment] = useState("");
  const handleComment = (data) => {
    setComment(data);
  };
  const fetchComment = () => {
    fetch("/", { method: "POST", body: comment });
  };
  return (
    <div className="list-MyComment-bg">
      <div className="list-MyComment">
        <div>
          <h3>Your Comment</h3>
        </div>
        <textarea className="textarea" />
        <button className="list-MyComment-btn">✏️ Save</button>
      </div>
    </div>
  );
}
