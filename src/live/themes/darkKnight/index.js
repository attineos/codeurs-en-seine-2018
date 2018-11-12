import { colors as c } from '../../../variables'
import { Batman } from '../../../images'

const darkKnight = {
  components: {
    button: {
      icon: Batman,
      color: c.white,
      '1s': {
        background: c.gold,
        backgroundHover: c.brightSun,
      },
      '2s': {
        background: c.webOrange,
        backgroundHover: c.sunGlow,
      },
      '3s': {
        background: c.pizazz,
        backgroundHover: c.sunShade,
      },
    },
    page: {
      background: c.black,
    },
    text: {
      color: c.white,
    },
  },
}

export default darkKnight
