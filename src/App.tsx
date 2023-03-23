import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { Post } from './pages/Post'

import { AppLayout } from './layouts/AppLayout'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'post',
        element: <Post />,
      },
    ],
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />

      <GlobalStyles />
    </ThemeProvider>
  )
}
