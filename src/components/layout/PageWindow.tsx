import {Link} from "@tanstack/react-router";
import type {CSSProperties, ReactNode} from "react";

interface WindowProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function PageWindow({title, className, style, children}: Readonly<WindowProps>) {

  return (

    <div className={`window ${className}`} style={style}>
      <div className={"title-bar"}>
        <div className={"title-bar-text"}>{title}</div>
        <div className={"title-bar-controls"}>
          <Link to={"/"}>
            <button aria-label={"Minimize"}></button>
          </Link>
          <Link to={"/"}>
          <button aria-label={"Close"}></button>
          </Link>
        </div>
      </div>
      <div className={"window-body"}>
        {children}
      </div>
    </div>
  )
}