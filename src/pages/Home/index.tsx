import { useContext } from 'react'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsGrid, HomeContainer, PostsContainer } from './styles'
import { PostsContext } from '../../contexts/PostsContext'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <Profile />
      <PostsContainer>
        <SearchForm />
        <CardsGrid>
          {posts.map((post) => (
            <Card
              id={post.id}
              key={post.id}
              title={post.title}
              description={post.body}
              createdAt={post.created_at}
            />
          ))}
        </CardsGrid>
      </PostsContainer>
    </HomeContainer>
  )
}
