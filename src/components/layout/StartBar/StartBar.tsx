import Clock from "@/components/layout/Clock.tsx";
import {useTheme} from "@/context/ThemeContext.tsx";
import {useRouter} from "@tanstack/react-router";
import "./StartBar.css"

export default function StartBar() {
  const {theme, toggleTheme} = useTheme();
  const router = useRouter();

  if (theme === "xp") {
    return <div className="start-bar-xp start-bar">
      <div className={"start-group"}>
        <button className={"start-button-xp"}>Start</button>
        <div className={"button-group-xp"}>
          <button className={"icon-button"} onClick={toggleTheme}>
            <img src={"./icons/paint.png"} alt="Theme Switcher (Paint palette)" width={"40px"}/>
          </button>
          <button className={"tab-button-xp"}
                  role={"link"}
                  onClick={() => router.navigate({to: "/routeA"})}>
            route A
          </button>
          <button className={"tab-button-xp"}
                  role={"link"}
                  onClick={() => router.navigate({to: "/routeB"})}>
            route B
          </button>
        </div>
      </div>
      <Clock/>
    </div>
  } else {
    return <div className="start-bar-w98 start-bar">
      <div className={"start-group"}>
        <button className={"start-button default"}>Start</button>
        <span className={"separator"}></span>
        <span className={"group-grab"}></span>
        <button className={"icon-button"} onClick={toggleTheme}>
          <img src={"./icons/paint.png"} alt="Theme Switcher (Paint palette)" width={"40px"}/>
        </button>
        <span className={"separator"}></span>
        <span className={"group-grab"}></span>
        <button role={"link"} onClick={() => router.navigate({to: "/routeA"})}>
          route A
        </button>
        <button role={"link"} onClick={() => router.navigate({to: "/routeB"})}>
          route B
        </button>
      </div>
      <Clock/>
    </div>
  }
}

