import React from 'react'

import { ThemeProvider } from '@mui/material/styles'

import { RecoilRoot } from 'recoil'

import Routes from 'routes'
import { AppLayout } from 'layouts'
import { theme } from 'styles/theme'

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
