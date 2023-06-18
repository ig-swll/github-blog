import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
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
export const PostContent = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;

  p,
  a {
    font-size: ${({ theme }) => theme.fontSize.base};
  }

  a {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue};
  }

  pre {
    div {
      padding: 1rem !important;
      background-color: ${({ theme }) => theme.colors.base.post} !important;
      border-radius: 2px !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        font-weight: 400 !important;
      }
    }
  }
`
