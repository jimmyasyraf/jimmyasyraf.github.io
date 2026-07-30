"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "software engineer",
  "robotics enthusiast",
  "rails + react",
  "based in ottawa, canada",
];

export function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index];

    let delay = deleting ? 35 : 65;
    if (!deleting && text === full) delay = 2400;
    else if (deleting && text === "") delay = 500;

    const timeout = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % ROLES.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span aria-label={ROLES.join(", ")}>
      {text}
      <span aria-hidden="true" className="cursor-blink text-neutral-500">▊</span>
    </span>
  );
}
