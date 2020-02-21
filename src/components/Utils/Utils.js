// Libraries
import React from "react";
import moment from "moment";

import './Utils.css';

export function CreateDate(date, format = "dddd, MMMM do, YYYY" ) {
  return moment(date).format(format);
}

export function CreateTimestamp(date, format = "MMMM do, h:mm a") {
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
