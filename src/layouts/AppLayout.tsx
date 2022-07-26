import React from 'react'
import Container from '@mui/material/Container'

interface AppLayoutProps {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return <Container maxWidth='sm'>{children}</Container>
}

export default AppLayout
