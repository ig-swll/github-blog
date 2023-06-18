import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

interface StyledAnchorProps extends LinkProps {
  withDecoration?: boolean
  iconAtLeft?: boolean
}

export const StyledAnchor = styled(Link)<StyledAnchorProps>`
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid transparent;
  cursor: pointer;

  text-decoration: ${(props) => (props.withDecoration ? 'underline' : 'none')};
  flex-direction: ${(props) => (props.iconAtLeft ? 'row-reverse' : 'row')};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  span {
    line-height: 100%;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`
