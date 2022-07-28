import React from 'react'

import { RecoilRoot } from 'recoil'

import Routes from 'routes'
import { AppLayout } from 'layouts'

function App() {
  return (
    <RecoilRoot>
      <AppLayout>
        <Routes />
      </AppLayout>
    </RecoilRoot>
  )
}

export default App
