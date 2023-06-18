import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLoaderData } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { InfoCard } from '../../components/InfoCard'
import { Link } from '../../components/Link'
import { PostContent, PostInfoLinks, PostStats, PostTitle } from './styles'

interface PostData {
  body: string
  title: string
  issueUrl: string
  createdAt: Date
  author: string
  comments: number
}

export function Post() {
  const data = useLoaderData() as PostData

  return (
    <article>
      <InfoCard>
        <PostInfoLinks>
          <Link to="/" icon={faChevronLeft} iconAtLeft>
            VOLTAR
          </Link>

          <Link
            to={data.issueUrl}
            target="_blank"
            icon={faArrowUpRightFromSquare}
          >
            VER NO GITHUB
          </Link>
        </PostInfoLinks>
        <PostTitle>{data.title}</PostTitle>

        <PostStats>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data.author}</span>
          </div>
          <time>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {formatDistanceToNow(data.createdAt, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </time>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {data.comments} comentário{data.comments > 1 && 's'}
            </span>
          </div>
        </PostStats>
      </InfoCard>
      <PostContent
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {data.body}
      </PostContent>
    </article>
  )
}
