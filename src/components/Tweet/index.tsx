import React from 'react'
import { Container, Retweeted, Body, Avatar, Content, Header, Dot, Description 
} from './style'

const Tweet: React.FC = () => {
  return(
    <Container>
      <Retweeted>
        Você reTweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Github</strong>
            <span>@Github</span>
            <Dot />

            <Description>
              O ceu não é o limite 
            </Description>
          </Header>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet