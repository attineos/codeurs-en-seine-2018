import { colors as c } from '../../../variables'

const cesTheme = {
  components: {
    button: {
      primary: {
        color: c.white,
        background: c.darkBlue,
        backgroundHover: c.lightBlue,
      },
      secondary: {
        color: c.darkGrey,
        background: c.transparent,
        backgroundHover: c.lightGrey,
      },
    },
    page: {
      background: c.white,
    },
  },
}

export default cesTheme
