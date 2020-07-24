import React from 'react'
import { Container, Wrapper } from './styles'
import Main from '../Main/index'
import MenuBar from '../MenuBar'

const Layout: React.FC = () => {
  return (
   <Container>
     <Wrapper>
       <MenuBar />
       <Main />
       {/* <Sidebar /> */}
     </Wrapper>
   </Container>
  )
}

export default Layout