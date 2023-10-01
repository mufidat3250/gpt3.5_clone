import * as React from "react"
import { SVGProps } from "react"
const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="2rem"
    fill="none"
    stroke={props.color ||"#918f9c"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon-md text-gray-400"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
)
export default Check