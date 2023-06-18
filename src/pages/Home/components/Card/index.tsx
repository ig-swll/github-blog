/* eslint-disable react/no-unescaped-entities */
import { formatDistanceToNow } from 'date-fns'
import { CardContainer } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

interface CardProps {
  id: number
  title: string
  description: string
  createdAt: Date
}

export function Card(props: CardProps) {
  return (
    <CardContainer to={`/post/${props.id}`}>
      <div>
        <h4>{props.title}</h4>
        <span>
          {formatDistanceToNow(props.createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{props.description}</p>
    </CardContainer>
  )
}
