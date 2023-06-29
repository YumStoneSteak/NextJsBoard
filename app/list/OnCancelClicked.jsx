"use client";

const OnCancelClicked = (router) => {
  if (window.confirm("Do you really want to cancel the current info?")) {
    router.push("/");
  }
};

export default OnCancelClicked;
