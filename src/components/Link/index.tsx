import { AnchorHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { StyledAnchor } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
