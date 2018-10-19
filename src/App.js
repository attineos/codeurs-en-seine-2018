import React, { Component, Fragment } from 'react'
import logo from './logo.svg'

import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from 'react-router-dom'

import { Header, Image, Link } from './Styled/components'

import { LiveCodingPage, TitlePage } from './Styled/pages'

class App extends Component {

  renderRoot() {
    return <Redirect to="/title" />
  }

  renderLiveCoding() {
    return <LiveCodingPage />
  }

  renderTitle() {
    return <TitlePage />
  }

  render() {
    return (
      <Fragment>
        <Header>
          <Image src={logo} mode="rotate" alt="logo" />
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={this.renderRoot} />
            <Route
              path="/title"
              component={this.renderTitle}
            />
            <Route
              path="/live-coding"
              component={this.renderLiveCoding}
            />
            {/* <NotFoundRoute /> */}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
