import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  > img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
    aspect-ratio: 1/1;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }
`

export const ProfileContent = styled.div`
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.colors.base.title};
    }

    a {
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: bold;
    }
  }
`

export const ProfileStats = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }
`
