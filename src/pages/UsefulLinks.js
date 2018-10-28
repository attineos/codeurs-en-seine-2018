import React, { Component } from 'react'

import forEach from 'lodash/forEach'

import { ContainerFlex, Image, Line, Link, List, Title, SubTitle } from '../components'

import { GithubLogo, LodashLogo, ReactLogo, StyledCompoLogo } from '../images'

const links = [{
  name: "React",
  link: "https://reactjs.org/",
  icon: ReactLogo,
},{
  name: "Styled-components",
  link: "https://www.styled-components.com/",
  icon: StyledCompoLogo,
},{
  name: "Lodash",
  link: "https://lodash.com/",
  icon: LodashLogo,
},{
  name: "create-react-app",
  link: "https://github.com/facebook/create-react-app",
  icon: GithubLogo,
}]

class UsefulLinks extends Component {

  renderLi () {
    const lines = []
    forEach(links, link => {
      lines.push(<Line key={link.name}>
        <ContainerFlex jc="space-between" ai="center">
          {link.name && <SubTitle>{link.name}</SubTitle>}
          {link.link && <Link
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.link}
          </Link>}
          {link.icon && <Image src={link.icon} height="75px" />}
        </ContainerFlex>
      </Line>)
    })

    return lines
  }

  render() {
    return (
      <ContainerFlex fd="column">
        <Title col="black">Liens Utiles</Title>
        <List>
          {this.renderLi()}
        </List>
      </ContainerFlex>
    )
  }
}

export default UsefulLinks
