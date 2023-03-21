import { PropsWithChildren } from 'react'
import { InfoCardContainer } from './styles'

export function InfoCard({ children }: PropsWithChildren) {
  return <InfoCardContainer>{children}</InfoCardContainer>
}
