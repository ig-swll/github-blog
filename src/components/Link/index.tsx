import { AnchorHTMLAttributes } from 'react'
import { ArrowSquareOut } from 'phosphor-react'
import { StyledAnchor } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  withIcon?: boolean
  withDecoration?: boolean
}

export function Link({
  withIcon = false,
  withDecoration = false,
  ...props
}: LinkProps) {
  return (
    <StyledAnchor
      withDecoration={withDecoration}
      withIcon={withIcon}
      {...props}
    >
      <span>{props.children}</span>{' '}
      {withIcon && <ArrowSquareOut weight="duotone" />}
    </StyledAnchor>
  )
}
