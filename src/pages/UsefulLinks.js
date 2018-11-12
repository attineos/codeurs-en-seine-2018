import React, { Component } from 'react'

import forEach from 'lodash/forEach'

import {
  AnimatedContainerFlex,
  ContainerFlex,
  Image,
  Line,
  Link,
  List,
  Title,
  SubTitle,
} from '../styles'

import { GithubLogo, LodashLogo, ReactLogo, StyledCompoLogo } from '../images'

const links = [
  {
    name: 'Notre présentation',
    link: 'Notre future repo',
    icon: ReactLogo,
    icon2: StyledCompoLogo,
  },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    icon: ReactLogo,
  },
  {
    name: 'Styled-components',
    link: 'https://www.styled-components.com/',
    icon: StyledCompoLogo,
  },
  {
    name: 'Lodash',
    link: 'https://lodash.com/',
    icon: LodashLogo,
  },
  {
    name: 'create-react-app',
    link: 'https://github.com/facebook/create-react-app',
    icon: GithubLogo,
  },
]

class UsefulLinks extends Component {
  renderLi() {
    const lines = []
    forEach(links, link => {
      lines.push(
        <Line key={link.name}>
          <ContainerFlex jc="space-between" ai="center">
            {link.name && <SubTitle>{link.name}</SubTitle>}
            {link.link && (
              <Link href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </Link>
            )}
            {link.icon2 ? (
              <div>
                {link.icon && <Image src={link.icon} h="h50" />}
                {link.icon2 && <Image src={link.icon2} h="h50" ml="s6" />}
              </div>
            ) : (
              link.icon && <Image src={link.icon} h="h75" />
            )}
          </ContainerFlex>
        </Line>,
      )
    })

    return lines
  }

  render() {
    return (
      <AnimatedContainerFlex fd="column">
        <Title mb="s0" color="black">
          Liens Utiles
        </Title>
        <List>{this.renderLi()}</List>
      </AnimatedContainerFlex>
    )
  }
}

export default UsefulLinks
