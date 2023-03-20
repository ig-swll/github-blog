import styled from 'styled-components'

interface StyledAnchorProps {
  withIcon: boolean
  withDecoration: boolean
}

export const StyledAnchor = styled.a<StyledAnchorProps>`
  color: ${({ theme }) => theme.colors.blue};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: ${(props) => (props.withDecoration ? 'initial' : 'none')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`
