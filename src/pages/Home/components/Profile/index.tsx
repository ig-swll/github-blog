import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { InfoCard } from '../../../../components/InfoCard'
import { Link } from '../../../../components/Link'
import { ProfileContent, ProfileStats, ProfileWrapper } from './styles'
import { useLoaderData } from 'react-router-dom'

interface UserData {
  avatarUrl: string
  bio: string
  company: string
  followers: number
  profileUrl: string
  login: string
  name: string
}

export function Profile() {
  const profileData = useLoaderData() as UserData

  return (
    <InfoCard>
      <ProfileWrapper>
        <img src={profileData.avatarUrl} alt="" />
        <div>
          <ProfileContent>
            <div>
              <h2>{profileData.name}</h2>
              <Link to={profileData.profileUrl} icon={faArrowUpRightFromSquare}>
                GITHUB
              </Link>
            </div>
            <p>{profileData.bio}</p>
          </ProfileContent>
          <ProfileStats>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>sethwololo</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Senado Federel</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>
                {profileData.followers} seguidor
                {profileData.followers > 1 && 'es'}
              </span>
            </div>
          </ProfileStats>
        </div>
      </ProfileWrapper>
    </InfoCard>
  )
}
