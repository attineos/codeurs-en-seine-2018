import { colors as c } from '../../../variables'
// eslint-disable-next-line no-unused-vars
import { CES } from '../../../images'

const cesTheme = {
  button: {
    color: c.white,
    '1s': {
      background: c.red,
      backgroundHover: c.lightRed,
    },
    '2s': {
      background: c.orange,
      backgroundHover: c.lightOrange,
    },
    '3s': {
      background: c.green,
      backgroundHover: c.lightGreen,
    },
  },
  page: {
    background: c.white,
  },
  text: {
    color: c.darkBlue,
  },
}

export default cesTheme
