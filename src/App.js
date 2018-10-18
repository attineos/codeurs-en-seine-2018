import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'

import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from 'react-router-dom'

import { Header, Image, Link } from './Styled/components'

import { LiveCoding, TitlePage } from './Styled/pages'

class App extends Component {
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
            <Route exact path="/" render={() => (<Redirect to="/title" />)} />
            <Route
              path="/title"
              component={() => (
                <TitlePage
                />
              )}
            />
            <Route
              path="/live-coding"
              component={() => (
                <LiveCoding
                />
              )}
            />
            {/* <NotFoundRoute /> */}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
