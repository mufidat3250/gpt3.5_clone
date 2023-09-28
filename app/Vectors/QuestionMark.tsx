import * as React from "react"
import { SVGProps } from "react"
const QuestionMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#908ba1"
      d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8a4 4 0 0 0-8 0v1H6V8a6 6 0 0 1 6-6Z"
    />
  </svg>
)
export default QuestionMark

// #908ba1