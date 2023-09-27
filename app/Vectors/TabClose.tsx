// import * as React from "react"
// import { SVGProps } from "react"
// const TabClose = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     fill="none"
//     stroke="currentColor"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth={2}
//     className="icon-sm"
//     viewBox="0 0 24 24"
//     {...props}
//   >
//     <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
//     <path d="M9 3v18" />
//   </svg>
// )
// export default TabClose

import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="rgba(255,255,255,1)"
        d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm5 2H4v14h4V5zm2 0v14h10V5H10z"
      ></path>
    </svg>
  );
}

export default Icon;

