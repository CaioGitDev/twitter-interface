import React from 'react'
import { Container, Banner, Avatar, ProfileData, EditButton,
  LocationIcon, CakeIcon, Fallowage } from './styles'
import Feed from '../../components/Feed/index'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
      <Avatar />

      </Banner>
      <ProfileData>
        <EditButton outlined>
          Editar Perfil
        </EditButton>
        <h1>Caio Rosa</h1>
        <h2>@dev.caiorosa</h2>

        <p>
          Developer at <a href="https://www.google.com">@World</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santarem, Portugal
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de outubro de 0000
          </li>
        </ul>

        <Fallowage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </Fallowage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage