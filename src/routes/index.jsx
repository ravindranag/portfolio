import { css } from '@/styled-system/css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1 className={css({fontSize: 96, fontOpticalSizing: 'auto'})}>Ravindra Nag</h1>
    
  </div>
}
