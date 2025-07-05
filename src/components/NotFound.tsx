import {Link} from "@tanstack/react-router";
import PageWindow from "@/components/layout/PageWindow.tsx";

export default function NotFound() {
  return (
    <div
      style={{display: "flex", justifyContent: "center", paddingTop: "300px", alignItems: "center"}}>
      <PageWindow title="Not Found" style={{width: "300px", height: "120px"}}>
        <div style={{display: "flex"}}>
          <img src={"./icons/error.png"} alt={"Error Icon"} style={{width: "50px", height: "50px"}}/>
          <p>The page you are looking for does not exist.</p>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}>
          <Link to={"/"}>
            <button className={"default"}>Ok</button>
          </Link>
        </div>
      </PageWindow>
    </div>
  )
}