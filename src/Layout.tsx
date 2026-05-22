import {Outlet} from 'react-router-dom'
import { ThemeProvider } from '@/contexts/theme-provider'
import {Header} from '@/components/Header'

function Layout() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export {Layout}