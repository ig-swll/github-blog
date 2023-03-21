import styled from 'styled-components'

export const CardContainer = styled.div`
  max-height: 16.25rem;
  height: 100%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.base.post};
  background-color: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.base.border};
  }

  > div {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;

    h4 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    overflow: hidden;
  }
`
