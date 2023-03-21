import Logo from '../../assets/github-blog-logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function BgHeader() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Logo do Github Blog" />
      </HeaderContent>
    </HeaderContainer>
  )
}
