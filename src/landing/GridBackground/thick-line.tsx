export default function ThickLine() {
  return (
    <svg
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="24"
        y="7.5"
        width="24"
        height="7.5"
        rx="2"
        transform="rotate(-180 24 7.5)"
        fill="#D8D7DF"
        fillOpacity="0.4"
      />
      <g filter="url(#filter0_d_536_2475)">
        <rect
          x="22"
          y="6"
          width="20"
          height="4"
          rx="0.947368"
          transform="rotate(-180 22 6)"
          fill="#E4E5E8"
          fillOpacity="0.1"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_536_2475"
          x="0"
          y="2"
          width="24"
          height="8"
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
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_536_2475"
          />
          <feBlend
            mode="normal"
            in="BackgroundImageFix"
            in2="effect1_dropShadow_536_2475"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
