import React from "react";

type Props = {
  height: number;
  width: number;
  backgroundColor: string;
  mainColor: string;
};

const LoadingAnimation = (props: Props) => {
  const { height, width, backgroundColor, mainColor } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
      style={{
        shapeRendering: "auto",
        display: "block",
        background: backgroundColor,
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <circle
          stroke-dasharray="164.93361431346415 56.97787143782138"
          r="35"
          stroke-width="10"
          stroke={mainColor}
          fill="none"
          cy="50"
          cx="50"
        >
          <animateTransform
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            dur="1s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  );
};

export default LoadingAnimation;
