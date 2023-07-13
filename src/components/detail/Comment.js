"use client";

import { useState, useEffect } from "react";

export default function Comment({ movieId }) {
  const [MyComment, setMyComment] = useState("");
  const [AllComments, setAllComments] = useState([]);

  const fetchMyComment = async () => {
    await fetch("/api/detail/myComment", {
      method: "POST",
      body: JSON.stringify({
        comment: MyComment,
        writerName: "",
        writerEmail: "",
        parentMovieId: movieId,
      }),
    })
      .then(() => {
        setMyComment("");
        setAllComments("");
      })
      .then(() => {
        fetchAllComments();
      })
      .catch((error) => {
        console.error("댓글 가져오기 실패:", error);
      });
  };

  const fetchAllComments = () => {
    fetch(`/api/detail/allComments?movieId=${movieId}`)
      .then((response) => response.json())
      .then((data) => setAllComments(JSON.parse(data)))
      .catch((error) => {
        console.error("댓글 가져오기 실패:", error);
      });
  };

  useEffect(() => {
    fetchAllComments();
  }, []);

  return (
    <>
      <div className="list-MyComment-bg">
        <div className="list-MyComment">
          <div>
            <h3>Your Comment</h3>
          </div>
          <textarea
            className="textarea"
            placeholder="이 영화 어땠나요?"
            onChange={(e) => setMyComment(e.target.value)}
            value={MyComment}
          />
          <button
            className={`list-MyComment-btn ${!MyComment ? "disabled" : ""}`}
            onClick={() => fetchMyComment()}
            disabled={!MyComment}
          >
            ✏️ Save
          </button>
        </div>
      </div>
      <div className="list-comments-bg">
        {AllComments.length > 0 ? (
          AllComments.reverse().map((data, index) => (
            <div
              className="list-comments"
              key={data.writerEmail}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3>{data.writerName}</h3>
              <textarea
                className="textarea"
                defaultValue={data.comment}
                readOnly
              />
              <div className="list-comments-btns">
                <button className="list-comments-btn">👍 Like</button>
                <button className="list-comments-btn">👎 Bad</button>
                <button className="list-comments-btn">📝 Edit</button>
                <button className="list-comments-btn">🪣 Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div>코맨트를 가장 먼저 남겨보세요!</div>
        )}
      </div>
    </>
  );
}
