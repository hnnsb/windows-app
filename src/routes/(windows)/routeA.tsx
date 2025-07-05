import {createFileRoute} from '@tanstack/react-router'
import PageWindow from "@/components/layout/PageWindow.tsx";

export const Route = createFileRoute('/(windows)/routeA')({
  component: RouteA,
})

function RouteA() {
  return (
    <PageWindow title={"Route A"}>
      <p> Some content</p>
    </PageWindow>
  )
}
