export default function Diamond() {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_544_2493)">
        <rect
          x="23.5"
          y="8.94336"
          width="22"
          height="22"
          rx="4"
          transform="rotate(45 23.5 8.94336)"
          fill="#F6F6F8"
        />
        <g filter="url(#filter0_d_544_2493)">
          <rect
            x="23.0703"
            y="17"
            width="10"
            height="10"
            rx="2"
            transform="rotate(45 23.0703 17)"
            fill="#E4E5E8"
            fillOpacity="0.16"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          d="M23.5 46.5C36.2025 46.5 46.5 36.2025 46.5 23.5C46.5 10.7975 36.2025 0.5 23.5 0.5C10.7975 0.5 0.5 10.7975 0.5 23.5C0.5 36.2025 10.7975 46.5 23.5 46.5Z"
          stroke="#EEEEEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_544_2493"
          x="12"
          y="17"
          width="22.1406"
          height="22.1426"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_544_2493"
          />
          <feBlend
            mode="normal"
            in="BackgroundImageFix"
            in2="effect1_dropShadow_544_2493"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_544_2493">
          <rect width="47" height="47" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
