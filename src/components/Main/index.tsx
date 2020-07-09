import React from 'react'
import ProfilePage from '../ProfilePage'

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu, 
  HomeIcon, 
  BellIcon,
  SearchIcon, 
  EmailIcon } from './styles'

const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Caio Rosa</strong>
          <span>666 Tweets</span>
        </ProfileInfo>
      </Header>

      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>

      <ProfilePage />
    </Container>
  )
}

export default Main;