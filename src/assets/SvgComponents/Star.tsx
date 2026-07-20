import React from "react";

export default function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="17"
      viewBox="0 0 26 17"
      fill="none"
      {...props}
    >
      <path
        d="M0 13.6667C0 13.1604 0.410406 12.75 0.916666 12.75L5.66667 12.75C6.17293 12.75 6.58333 13.1604 6.58333 13.6667C6.58333 14.1729 6.17293 14.5833 5.66667 14.5833H0.916667C0.410406 14.5833 0 14.1729 0 13.6667Z"
        fill="white"
      />
      <rect
        x="2.33398"
        y="8"
        width="8.25"
        height="1.83333"
        rx="0.916667"
        fill="url(#paint0_linear_294_2246)"
      />
      <path
        d="M19.334 1L13.334 9.5H18.334L17.834 16L24.334 7.5H19.334V1Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_294_2246"
          x1="2.33398"
          y1="8.91667"
          x2="10.584"
          y2="8.91667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
