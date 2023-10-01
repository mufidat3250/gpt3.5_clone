import * as React from "react"
import { SVGProps } from "react"
const CustomInstruction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    className="h-4 w-4 shrink-0"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.44 15.707a2 2 0 0 1-2 2h-12l-4 4v-16a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M7.825 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Zm4.675 0a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Zm4.675 0a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z"
    />
  </svg>
)
export default CustomInstruction
