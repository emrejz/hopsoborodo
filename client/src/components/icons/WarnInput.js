import * as React from "react";

function SvgWarnInput(props) {
  return (
    <svg width={24} height={24} fill="#FA3F3F" {...props}>
      <path d="M23 10.586L13.414 1a2 2 0 00-2.828 0L1 10.587a2 2 0 000 2.828L10.586 23a2 2 0 002.828 0L23 13.415a2 2 0 000-2.829zM11.068 6.417a1 1 0 012 0v6a1 1 0 01-2 0v-6zm1.051 11.51h-.028a1.529 1.529 0 01-1.522-1.47 1.474 1.474 0 011.419-1.529l.029-.001h.028c.82.002 1.491.651 1.522 1.47a1.474 1.474 0 01-1.419 1.529l-.029.001z" />
    </svg>
  );
}

export default SvgWarnInput;
