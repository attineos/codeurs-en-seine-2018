import React, { Component, Fragment } from 'react'
import {ThemeProvider} from 'styled-components'

import {
  Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import createBrowserHistory from "history/createBrowserHistory"

import {
  LINK_NEXT_PAGE_NAME_ATTR,
  LINK_PREVIOUS_PAGE_NAME_ATTR,
  NAVIGATION,
  URL_ABOUT_US_PAGE,
  URL_END_PAGE,
  URL_QUESTION_PAGE,
  URL_LIVE_CODING_PAGE,
  URL_USEFUL_LINKS_PAGE,
  URL_TITLE_PAGE,
  URL_WAITING_PAGE,
} from './config'

import theme from './theme'

import {
  ArrowLeft,
  ArrowRight,
} from './images'

import Image from './components/Image'

import {
  AboutUsPage,
  LiveCodingPage,
  NotFoundPage,
  QuestionPage,
  SummaryPage,
  TitlePage,
  UsefulLinks,
} from './pages'

const nextStyle = {position: 'absolute', bottom: '25px', right: '25px' }
const prevStyle = {position: 'absolute', bottom: '25px', left: '25px' }

class App extends Component {

  history = createBrowserHistory()

  handleChangePage = (e) => {
    const nextPage = LINK_PREVIOUS_PAGE_NAME_ATTR === e.currentTarget.name ? 'prev' : 'next'

    const currentPage = document.location.pathname

    if(!!NAVIGATION[currentPage][nextPage]) {
      this.history.push(NAVIGATION[currentPage][nextPage])
    }
  }

  renderRoot () {
    return <Redirect to={URL_WAITING_PAGE} />
  }

  renderAboutUs () {
    return <AboutUsPage />
  }

  renderLiveCoding () {
    return <LiveCodingPage />
  }

  renderEnd () {
    return <SummaryPage color="black" /> 
  }

  renderQuestion () {
    return <QuestionPage color="black" /> 
  }

  renderUsefulLinks () {
    return <UsefulLinks />
  }

  renderTitle () {
    return <TitlePage />
  }

  renderWaitingTitle () {
    return <SummaryPage color="blue" /> 
  }

  render() {

    return (
      <ThemeProvider theme={theme} >
        <Fragment>
          <Router history={this.history}>
            <Switch>
              <Route exact path="/" render={this.renderRoot} />
              <Route
                path={URL_WAITING_PAGE}
                component={this.renderWaitingTitle}
              />
              <Route
                path={URL_TITLE_PAGE}
                component={this.renderTitle}
              />
              <Route
                path={URL_ABOUT_US_PAGE}
                component={this.renderAboutUs}
              />
              <Route
                path={URL_LIVE_CODING_PAGE}
                component={this.renderLiveCoding}
              />
              <Route
                path={URL_USEFUL_LINKS_PAGE}
                component={this.renderUsefulLinks}
              />
              <Route
                path={URL_QUESTION_PAGE}
                component={this.renderQuestion}
              />
              <Route
                path={URL_END_PAGE}
                component={this.renderEnd}
              />
              <NotFoundPage />
            </Switch>
          </Router>
          <Image
            width="50px"
            src={ArrowLeft}
            name={LINK_PREVIOUS_PAGE_NAME_ATTR}
            style={prevStyle}
            onClick={this.handleChangePage}
          />
          <Image
            width="50px"
            src={ArrowRight}
            name={LINK_NEXT_PAGE_NAME_ATTR}
            style={nextStyle}
            onClick={this.handleChangePage}
          />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
