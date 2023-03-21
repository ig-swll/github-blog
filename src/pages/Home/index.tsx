import { Input } from '../../components/Input'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { CardsGrid, HomeContainer, PostsContainer, SearchForm } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PostsContainer>
        <SearchForm>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
          <Input placeholder="Buscar conteúdo" />
        </SearchForm>
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
