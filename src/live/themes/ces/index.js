import { colors as c } from '../../../variables'
import { CES } from '../../../images'

const cesTheme = {
  components: {
    button: {
      icon: CES,
      color: c.white,
      '1s': {
        background: c.salmon,
        backgroundHover: c.red,
      },
      '2s': {
        background: c.darkOrange,
        backgroundHover: c.orange,
      },
      '3s': {
        background: c.limeGreen,
        backgroundHover: c.lime,
      },
    },
    page: {
      background: c.white,
    },
    text: {
      color: c.darkBlue,
    },
  },
}

export default cesTheme
