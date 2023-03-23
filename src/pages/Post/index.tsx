import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { InfoCard } from '../../components/InfoCard'
import { Link } from '../../components/Link'
import { PostInfoLinks, PostStats, PostTitle } from './styles'

export function Post() {
  return (
    <article>
      <InfoCard>
        <PostInfoLinks>
          <Link icon={faChevronLeft} iconAtLeft>
            VOLTAR
          </Link>

          <Link icon={faArrowUpRightFromSquare}>VER NO GITHUB</Link>
        </PostInfoLinks>
        <PostTitle>Javascript data types and data structures</PostTitle>

        <PostStats>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>sethwololo</span>
          </div>
          <time>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </time>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </PostStats>
      </InfoCard>
    </article>
  )
}
