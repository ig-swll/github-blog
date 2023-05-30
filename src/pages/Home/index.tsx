import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsGrid, HomeContainer, PostsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PostsContainer>
        <SearchForm />
        <CardsGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsGrid>
      </PostsContainer>
    </HomeContainer>
  )
}
