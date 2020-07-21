import React from 'react'
import { Container, Retweeted, Body, Avatar, Content, Header, Dot, Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  RocketseatIcon
} from './style'

const Tweet: React.FC = () => {
  return(
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>HotChilliPeper</strong>
            <span>@Github</span>
            <Dot />

            <Description>
              O ceu não é o limite 
            </Description>

            <ImageContent />

            <Icons>
              <Status>
                <CommentIcon />
                65
              </Status>
              <Status>
                <RetweetIcon />
                43
              </Status>
              <Status>
                <LikeIcon />
                333
              </Status>
            </Icons>
          </Header>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet