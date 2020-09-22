import * as React from "react";

function SvgLoadingCircle(props) {
  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="loadingCircle_svg__lds-ring"
      style={{
        background: "0 0",
      }}
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        r={30}
        stroke="fff"
        strokeWidth={10}
      />
      <circle
        cx={50}
        cy={50}
        fill="none"
        r={30}
        stroke="#ff6000"
        strokeWidth={8}
        strokeLinecap="round"
        transform="rotate(167.288 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;180 50 50;720 50 50"
          keyTimes="0;0.5;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          calcMode="linear"
          values="1.8849555921538759 186.6106036232337;90.47786842338603 98.01769079200155;1.8849555921538759 186.6106036232337"
          keyTimes="0;0.5;1"
          dur={1}
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default SvgLoadingCircle;
