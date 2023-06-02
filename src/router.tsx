import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { api } from './services/api'

export interface IssuePageResponse {
  html_url: string
  created_at: string
  body: string
  user: {
    login: string
  }
  comments: number
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'post/:id',
        element: <Post />,
        loader: async ({ params }) => {
          const response = await api.get<IssuePageResponse>(
            `/repos/ig-swll/github-blog/issues/${params.id}`,
            {
              params: {
                // q: '',
                Accept: 'application/vnd.github+json',
              },
            },
          )

          return response.data
        },
      },
    ],
  },
])
