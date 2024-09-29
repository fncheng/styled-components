import Router from './router'
import { Suspense } from 'react'

export default function App() {
  return (
    <Suspense fallback={<div>global loading...</div>}>
      <Router />
    </Suspense>
  )
}
