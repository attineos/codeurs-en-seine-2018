import styled from 'styled-components'

const Title = styled.h2`
  color: ${({ theme }) =>
    theme.components.text ? theme.components.text.color : theme.colors.darkBlue};

  font-family: ${({ theme }) => theme.fonts.fontFamily.oswald};
  font-size: ${({ theme }) => theme.fonts.fontSize.fs35};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw400};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lh50};

  margin-bottom: ${({ theme }) => theme.spaces.s6};
  margin-top: ${({ theme }) => theme.spaces.s6};
  text-align: center;
`

export default Title
