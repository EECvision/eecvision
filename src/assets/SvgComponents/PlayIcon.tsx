import React from "react";

export default function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_431_6069)">
        <path
          d="M11.5 5.59882C12.1667 5.98372 12.1667 6.94597 11.5 7.33087L5.5 10.795C4.83333 11.1799 4 10.6987 4 9.92894L4 3.00074C4 2.23094 4.83333 1.74982 5.5 2.13472L11.5 5.59882Z"
          fill="#5C95FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_431_6069"
          x="0"
          y="0"
          width="16"
          height="16.9297"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_431_6069"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_431_6069"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
