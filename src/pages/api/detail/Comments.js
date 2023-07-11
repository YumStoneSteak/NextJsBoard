"use client";

import { useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState("");
  const handleComment = (data) => {
    setComment(data);
  };
  const fetchComment = () => {
    fetch("/", { method: "POST", body: comment });
  };
  return (
    <div className="list-comments-bg">
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
      <div className="list-comments">
        <h3>Writer Name</h3>
        <textarea className="textarea" defaultValue={"so funny!"} readOnly />
        <div className="list-comments-btns">
          <button className="list-comments-btn">👍 Like</button>
          <button className="list-comments-btn">👎 Bad</button>
          <button className="list-comments-btn">📝 Edit</button>
          <button className="list-comments-btn">🪣 Delete</button>
        </div>
      </div>
    </div>
  );
}
