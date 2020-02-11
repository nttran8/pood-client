// Libraries
import React from "react";
import { format as formatDate } from "date-fns";

export function CreateDate({ date, format = "EEEE, MMMM d, yyyy" }) {
  return formatDate(date, format);
}

export function CreateTimestamp({ date, format = "MMMM d, hh:mm aaaa" }) {
  return formatDate(date, format);
}

export function CreateInput({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
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
