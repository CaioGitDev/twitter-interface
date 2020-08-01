import React from 'react'
import { Container, SearchWrapper,SearchInput,SearchIcon,Body } from './styles'
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'



const SideBar: React.FC = () =>{
  return(
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
              name="React"
              nickname="@React"
            />,
            <FollowSuggestion 
              name="React"
              nickname="@React"
            />,
            <FollowSuggestion 
              name="React"
              nickname="@React"
            />,
            <FollowSuggestion 
              name="React"
              nickname="@React"
            />
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={[
            <h1>test element</h1>,
            <h1>test element</h1>,
            <h1>test element</h1>
          ]}
        />
      </Body>
    </Container>
  )
}

export default SideBar