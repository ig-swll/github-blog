import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  display: block;
  max-height: 16.25rem;
  height: 100%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.base.post};
  background-color: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base.text};

  &:hover {
    cursor: pointer;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.base.border};
  }

  /* &:focus {
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.colors.base.border};
  } */

  & > div {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;

    h4 {
      font-size: ${({ theme }) => theme.fontSize.lg};
      ${({ theme }) => theme.colors.base.title};
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      ${({ theme }) => theme.colors.base.span};
    }
  }
  p {
    text-decoration: none;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    overflow: hidden;
  }
`
