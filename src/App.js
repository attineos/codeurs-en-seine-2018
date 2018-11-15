import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { Router, Redirect, Route, Switch } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

import {
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
  AboutUsPage,
  LiveCodingPage,
  NotFoundPage,
  QuestionPage,
  SummaryPage,
  TitlePage,
  UsefulLinks,
} from './pages'

class App extends Component {
  componentDidMount() {
    window.onkeyup = e => {
      const key = e.key ? e.key : e.which

      if (key === 'ArrowUp' || key === 'ArrowRight') {
        this.handleChangePage('next')
      } else if (key === 'ArrowDown' || key === 'ArrowLeft') {
        this.handleChangePage('prev')
      }
    }
  }

  handleChangePage = side => {
    const currentPage = document.location.pathname

    if (!!NAVIGATION[currentPage][side]) {
      this.history.push(NAVIGATION[currentPage][side])
    }
  }

  history = createBrowserHistory()

  renderRoot() {
    return <Redirect to={URL_WAITING_PAGE} />
  }

  renderAboutUs() {
    return <AboutUsPage />
  }

  renderLiveCoding() {
    return <LiveCodingPage />
  }

  renderEnd() {
    return <SummaryPage bc="black" />
  }

  renderQuestion() {
    return <QuestionPage />
  }

  renderUsefulLinks() {
    return <UsefulLinks />
  }

  renderTitle() {
    return <TitlePage />
  }

  renderWaitingTitle() {
    return <SummaryPage bc="darkBlue" />
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={this.history}>
          <Switch>
            <Route exact path="/" render={this.renderRoot} />
            <Route path={URL_WAITING_PAGE} component={this.renderWaitingTitle} />
            <Route path={URL_TITLE_PAGE} component={this.renderTitle} />
            <Route path={URL_ABOUT_US_PAGE} component={this.renderAboutUs} />
            <Route path={URL_LIVE_CODING_PAGE} component={this.renderLiveCoding} />
            <Route path={URL_USEFUL_LINKS_PAGE} component={this.renderUsefulLinks} />
            <Route path={URL_QUESTION_PAGE} component={this.renderQuestion} />
            <Route path={URL_END_PAGE} component={this.renderEnd} />
            <NotFoundPage />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
