import { PropsWithChildren, createContext, useCallback, useState } from 'react'
import { api } from '../services/api'

interface Post {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
}

interface GithubResponse {
  items: Post[]
}

interface PostsContextType {
  posts: Post[]
  fetchPosts: (title?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>([])

  async function getIssues(title: string) {
    const githubQuery = encodeURI(title + 'repo:ig-swll/github-blog')
    const result = await api.get<GithubResponse>('/search/issues', {
      params: {
        q: githubQuery,
      },
    })

    return result.data.items
  }

  const fetchPosts = useCallback(async () => {
    const githubData = await getIssues('')
    setPosts(githubData)
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
