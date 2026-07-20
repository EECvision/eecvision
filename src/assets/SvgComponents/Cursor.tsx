import React from "react";

export default function Cursor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M11 2.75V4.5M16.9069 5.09326L15.5962 6.40392M6.40381 15.5962L5.09315 16.9069M4.5 11H2.75M6.40381 6.40381L5.09315 5.09315M14.1323 20.999L10.5777 11.3226C10.3542 10.7143 10.9552 10.1281 11.5577 10.3666L21.0397 14.1199C21.4283 14.2737 21.4679 14.8081 21.1062 15.0175L17.4231 17.1498C17.3097 17.2155 17.2155 17.3097 17.1498 17.4231L15.0343 21.0771C14.822 21.4438 14.2784 21.3967 14.1323 20.999Z"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
