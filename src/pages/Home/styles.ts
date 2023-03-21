import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SearchForm = styled.form`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    span {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  input {
    width: 100%;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`
