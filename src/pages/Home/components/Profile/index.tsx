import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { InfoCard } from '../../../../components/InfoCard'
import { Link } from '../../../../components/Link'
import { ProfileContent, ProfileStats, ProfileWrapper } from './styles'

export function Profile() {
  return (
    <InfoCard>
      <ProfileWrapper>
        <img
          src="https://api.lorem.space/image/face?w=150&h=150"
          alt="Imagem de User"
        />
        <div>
          <ProfileContent>
            <div>
              <h2>User Name</h2>
              <Link href="#github" withIcon>
                GITHUB
              </Link>
            </div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </ProfileContent>
          <ProfileStats>
            <div>
              <GithubLogo size={20} weight="fill" />
              <span>sethwololo</span>
            </div>
            <div>
              <Buildings size={20} weight="fill" />
              <span>Senado Federel</span>
            </div>
            <div>
              <Users size={20} weight="fill" />
              <span>-1 seguidor</span>
            </div>
          </ProfileStats>
        </div>
      </ProfileWrapper>
    </InfoCard>
  )
}
