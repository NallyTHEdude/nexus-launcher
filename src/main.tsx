import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'

import {Layout} from './Layout.tsx'
import { ThemeProvider } from './contexts/theme-provider.tsx'
import Home from '@/pages/home/Home.tsx'
import Login from '@/pages/login/Login.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='*' element={<div className='text-3xl text-center mt-20'>404 Not Found</div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
)
