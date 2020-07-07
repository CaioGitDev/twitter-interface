import React from 'react'
import { Container, Header, BackIcon, ProfileInfo } from './styles'

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

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}

export default Main;