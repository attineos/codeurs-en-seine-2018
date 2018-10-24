import React, { Component, Fragment } from 'react'
// import logo from './logo.svg'

import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from 'react-router-dom'

// import { Header, Image, Link, Paragraph } from './Styled/components'

import {
  URL_LIVE_CODING_PAGE,
  URL_TITLE_PAGE,
} from './Styled/config'

import { LiveCodingPage, TitlePage } from './Styled/pages'

class App extends Component {

  state = {
    currentPage: 'waiting',
  }

  handlePreviousPage = () => {
    const {
      currentPage
    } = this.state
    let newPage = ''
    switch(currentPage) {
      case 'title': newPage = 'waiting'
        break;
      default: newPage = 'waiting'
    }

    this.setState({
      currentPage: newPage,
    })
  }

  handleNextPage = () => {
    const {
      currentPage
    } = this.state
    let newPage = ''
    switch(currentPage) {
      case 'waiting': newPage = 'title'
        break;
      case 'title': newPage = 'live-coding'
        document.location.href = URL_LIVE_CODING_PAGE
        break;
      default: newPage = 'waiting'
    }

    this.setState({
      currentPage: newPage,
    })
  }

  renderRoot () {
    return <Redirect to={URL_TITLE_PAGE} />
  }

  renderLiveCoding () {
    return <LiveCodingPage />
  }

  renderTitle () {
    return <TitlePage
      next
    />
  }

  renderWaitingTitle () {
    return <TitlePage
    />
  }

  render() {
    const {currentPage} = this.state
    return (
      <Fragment>
        {/* <Header>
          <Image src={logo} mode="rotate" alt="logo" />
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph mb="0px" mt="0px">Learn React</Paragraph>
          </Link>
        </Header> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={this.renderRoot} />
            <Route
              path={URL_TITLE_PAGE}
              component={currentPage === 'title' ? this.renderTitle : this.renderWaitingTitle}
            />
            <Route
              path={URL_LIVE_CODING_PAGE}
              component={this.renderLiveCoding}
            />
            {/* <NotFoundRoute /> */}
          </Switch>
        </BrowserRouter>
        <div style={{position: 'absolute', bottom: '25px', left: '25px', color: "red" }} onClick={this.handlePreviousPage}>Previous</div>
        <div style={{position: 'absolute', bottom: '25px', right: '25px', color: "red" }} onClick={this.handleNextPage}>Next</div>
      </Fragment>
    );
  }
}

export default App;
