import React, { Component } from 'react'

import {
  AlienSvg,
  AstronautSvg,
  EarthSvg,
  JupiterSvg,
  MarsPlanetSvg,
  SaturnSvg,
  RocketSvg,
} from '../images'

import { AnimatedContainerFlex, Title, Image } from '../styles'

const earthSize = 300
const rocketSize = 100
const astronautSize = 100
const planetSize = 'w200'

class NotFoundPage extends Component {
  render() {
    const width = window.innerWidth
    const height = window.innerHeight
    return (
      <AnimatedContainerFlex bc="black" fd="column" jc="space-between">
        <Image
          src={EarthSvg}
          position="absolute"
          t={`${height / 2 - earthSize / 2}px`}
          l={`${width / 2 - earthSize / 2}px`}
          w="w300" // == earthSize
          alt="earth"
        />
        <Image src={MarsPlanetSvg} position="absolute" b="0" l="0" w={planetSize} alt="mars" />
        <Image src={JupiterSvg} position="absolute" b="0" r="0" w={planetSize} alt="jupiter" />
        <Image src={SaturnSvg} position="absolute" t="0" l="0" w={planetSize} alt="saturn" />
        <Image
          src={RocketSvg}
          position="absolute"
          t={`${height / 2 - rocketSize / 2}px`}
          l={`${width / 2 - rocketSize / 2}px`}
          w="w100" // == rocketSize
          mode="spin"
          speed="10s"
          alt="rocket"
        />
        <Image
          src={AstronautSvg}
          position="absolute"
          t={`${height / 3 - astronautSize / 2}px`}
          r={`${width / 3.5 - astronautSize / 2}px`}
          mode="verticalFilp"
          w="w100" // == astronautSize
          speed="10s"
          alt="astronaut"
        />
        <Image
          src={AlienSvg}
          position="absolute"
          t="50px"
          l="50px"
          mode="alien"
          w="w75"
          speed="20s"
          alt="alien"
        />
        <Title mt="s26">Houston nous avons un problème...</Title>
        <Title mb="s30">La page recherchée est introuvable</Title>
      </AnimatedContainerFlex>
    )
  }
}

export default NotFoundPage
