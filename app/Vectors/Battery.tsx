import * as React from "react"
import { SVGProps } from "react"
const Battery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className="icon-sm transition-colors text-brand-green"
    {...props}
  >
    <path
      fill="#00d37e"
      d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
    />
  </svg>
)
export default Battery
