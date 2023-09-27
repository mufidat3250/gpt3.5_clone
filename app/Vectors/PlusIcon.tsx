// import * as React from "react"
// import { SVGProps } from "react"
// const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={props.width || "1em"}
//     height={props.height || "1em"}
//     fill="none"
//     stroke="currentColor"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth={2}
//     className="icon-sm shrink-0"
//     viewBox="0 0 24 24"
//     {...props}
//   >
//     <path d="M12 5v14M5 12h14" />
//   </svg>
// )
// export default PlusIcon

import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="rgba(255,255,255,1)" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z" />
  </svg>
)
export default SvgComponent

