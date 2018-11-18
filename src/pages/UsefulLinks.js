import React, { Component } from 'react'

import forEach from 'lodash/forEach'

import { AnimatedContainerFlex, Cell, Image, Link, List, Row, Title, SubTitle } from '../styles'

import { Github, ReactSvg, StyledCompoLogo } from '../images'

const links = [
  {
    name: 'Notre présentation',
    link: 'Notre futur repo',
    icon: ReactSvg,
    icon2: StyledCompoLogo,
  },
  {
    name: 'Styled-components',
    link: 'https://www.styled-components.com/',
    icon: StyledCompoLogo,
  },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    icon: ReactSvg,
  },
  {
    name: 'create-react-app',
    link: 'https://github.com/facebook/create-react-app',
    icon: Github,
  },
]

class UsefulLinks extends Component {
  renderRows() {
    const lines = []
    forEach(links, link => {
      lines.push(
        <Row key={link.name}>
          {link.name && (
            <Cell>
              <SubTitle>{link.name}</SubTitle>
            </Cell>
          )}
          {link.link && (
            <Cell>
              <Link big href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </Link>
            </Cell>
          )}
          {link.icon2 ? (
            <Cell>
              {link.icon && <Image src={link.icon} h="h75" />}
              {link.icon2 && <Image src={link.icon2} h="h75" ml="s6" />}
            </Cell>
          ) : (
            link.icon && (
              <Cell>
                <Image src={link.icon} h="h75" />
              </Cell>
            )
          )}
        </Row>,
      )
    })

    return lines
  }

  render() {
    return (
      <AnimatedContainerFlex fd="column">
        <Title color="black">Liens Utiles</Title>
        <List>
          <tbody>{this.renderRows()}</tbody>
        </List>
      </AnimatedContainerFlex>
    )
  }
}

export default UsefulLinks
