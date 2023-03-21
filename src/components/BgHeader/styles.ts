import bgElements from '../../assets/bg-elements.svg'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: auto;
  background-color: ${({ theme }) => theme.colors.base.profile};
  background-image: url(${bgElements});
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-position: center;
  background-size: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding-top: 4rem;

  img {
    width: initial;
    height: initial;
  }
`
