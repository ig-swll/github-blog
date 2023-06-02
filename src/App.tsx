import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { PostsProvider } from './contexts/PostsContext'
import { router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <RouterProvider router={router} />

        <GlobalStyles />
      </PostsProvider>
    </ThemeProvider>
  )
}
