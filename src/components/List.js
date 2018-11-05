import styled from 'styled-components'

const List = styled.ul`
  color: white;
  font-size: 35px;
  font-family: ${({theme}) => theme.fonts.fontFamily.lato};
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 0;
  justify-content: center;
  margin: 0;

  li:nth-child(2n) {
    background-color: blue;
  }

  li:nth-child(2n-1) {
    background-color: cadetblue;
  }
`

export default List