import styled from 'styled-components'

export const PostInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  margin-bottom: 1.25rem;
`

export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.colors.base.title};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 0.5rem;
`

export const PostStats = styled.div`
  display: flex;
  gap: 1.5rem;

  div,
  time {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }
`
export const PostContent = styled.section`
  padding: 2.5rem 2rem;
`
