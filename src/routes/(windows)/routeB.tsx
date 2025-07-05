import {createFileRoute} from '@tanstack/react-router'
import PageWindow from "@/components/layout/PageWindow.tsx";

export const Route = createFileRoute('/(windows)/routeB')({
  component: RouteB,
})

function RouteB() {
  return (
    <div>
      <PageWindow title={"Route B"} style={{width: "400px", height: "300px"}}>
        <p>Some content</p>
      </PageWindow>
    </div>
  )
}
