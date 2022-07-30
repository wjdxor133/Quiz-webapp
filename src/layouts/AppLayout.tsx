import React from 'react'

import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

interface AppLayoutProps {
  children: React.ReactNode
}

const RootLayout = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function AppLayout({ children }: AppLayoutProps) {
  return <RootLayout maxWidth='sm'>{children}</RootLayout>
}

export default AppLayout
