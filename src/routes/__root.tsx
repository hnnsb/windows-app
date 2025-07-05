import { Outlet, createRootRoute } from '@tanstack/react-router'
import StartBar from "@/components/layout/StartBar/StartBar.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className={"outlet"}>
        <Outlet />
      </div>
      <StartBar />
    </>
  ),
})
