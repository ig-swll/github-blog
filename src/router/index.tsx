/* eslint-disable camelcase */
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'
import { homeLoader, postLoader } from './loaders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'post/:id',
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
])
