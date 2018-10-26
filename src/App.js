import React, { Component, Fragment } from 'react'

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
  URL_LIVE_CODING_PAGE,
  URL_TITLE_PAGE,
  URL_WAITING_PAGE,
} from './Styled/config'

import { AboutUsPage, LiveCodingPage, SummaryPage, TitlePage } from './Styled/pages'

import { Image } from './Styled/components'

import {
  arrowLeft,
  arrowRight,
} from './images'

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

  renderTitle () {
    return <TitlePage />
  }

  renderWaitingTitle () {
    return <SummaryPage color="blue" /> 
  }

  render() {

    return (
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
              path={URL_END_PAGE}
              component={this.renderEnd}
            />
          </Switch>
        </Router>
        <Image
          src={arrowLeft}
          name={LINK_PREVIOUS_PAGE_NAME_ATTR}
          style={prevStyle}
          onClick={this.handleChangePage}
        />
        <Image
          src={arrowRight}
          name={LINK_NEXT_PAGE_NAME_ATTR}
          style={nextStyle}
          onClick={this.handleChangePage}
        />
      </Fragment>
    );
  }
}

export default App;
