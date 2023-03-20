import styled from 'styled-components'

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.base.border};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.base.input};
  padding: 0.75rem 1rem;

  color: ${({ theme }) => theme.colors.base.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`
