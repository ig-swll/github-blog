import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { LinkProps as BaseLinkProps } from 'react-router-dom'

import { StyledAnchor } from './styles'

interface LinkProps extends BaseLinkProps {
  withDecoration?: boolean
  icon?: IconDefinition
  iconAtLeft?: boolean
}

export function Link(props: LinkProps) {
  return (
    <StyledAnchor {...props}>
      <span>{props.children}</span>

      {props.icon && <FontAwesomeIcon icon={props.icon} />}
    </StyledAnchor>
  )
}
