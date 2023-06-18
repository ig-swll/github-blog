import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { api } from '../services/api'

interface Post {
  id: number
  title: string
  body: string
  created_at: Date
  html_url: string
}

interface GithubResponse extends Omit<Post, 'created_at' | 'id'> {
  created_at: string
  number: number
}

interface PostsContextType {
  posts: Post[]
  fetchPosts: (title: string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>([])

  const controller = useMemo(() => new AbortController(), [])

  const fetchPosts = useCallback(
    async (title: string) => {
      const githubQuery = encodeURI(title + 'repo:ig-swll/github-blog')
      const response = await api.get<{ items: GithubResponse[] }>(
        '/search/issues',
        {
          params: {
            q: githubQuery,
            signal: controller.signal,
          },
        },
      )

      const formattedResponse = response.data.items.map((post) => ({
        ...post,
        created_at: new Date(post.created_at),
        id: post.number,
      }))

      setPosts(formattedResponse)
    },
    [controller.signal],
  )

  useEffect(() => {
    fetchPosts('')
    return () => {
      controller.abort()
    }
  }, [controller, fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
