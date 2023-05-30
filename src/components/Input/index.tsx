import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { StyledInput } from './styles'

export const Input = forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <StyledInput type={props.type ?? 'text'} {...props} ref={ref} />
})
