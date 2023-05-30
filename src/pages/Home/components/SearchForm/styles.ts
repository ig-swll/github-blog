import styled from 'styled-components'

export const FormContainer = styled.form`
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

export const Input = styled.input`
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
