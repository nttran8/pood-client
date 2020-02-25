// Library
import React from "react";
import moment from "moment";

// Style
import "./Utils.css";

export function CreateDate(date, format = "dddd, MMMM Do, YYYY") {
  return moment(date).format(format);
}

export function CreateTimestamp(date, format = "MMMM Do, h:mm a") {
  return moment(date).format(format);
}

export function CreateInput({ className, ...props }) {
  return <input className={["input", className].join(" ")} {...props} />;
}

export function CreateRequired({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}

export function CreateButton({ className, ...props }) {
  return <button className={["button", className].join(" ")} {...props} />;
}

export function CreateTextarea({ className, ...props }) {
  return <textarea className={["Textarea", className].join(" ")} {...props} />;
}

export function StyleDetail(style) {
  switch (style) {
    case "1":
      return "constipation - separate hard lumps, like nuts";
    case "2":
      return "constipation - sausage-shaped, but lumpy";
    case "3":
      return "average - sausage-shaped, but with cracks";
    case "4":
      return "perfection - sausage/snake shaped and smooth and soft";
    case "5":
      return "lacking fiber - soft blobs with clear cut edges";
    case "6":
      return "diarrhea - fluffly and mushy pieces";
    case "7":
      return "inflammation - watery";
    default:
      return "";
  }
}
