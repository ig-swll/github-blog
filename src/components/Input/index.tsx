import { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput type={props.type ?? 'text'} {...props} />
}
