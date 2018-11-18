import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { Router, Redirect, Route, Switch } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'
import { ROUTES, NAVIGATION, URL_WAITING_PAGE } from './config'

import theme from './theme'

import { NotFoundPage } from './pages'

class App extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.keyboardEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyboardEvent)
  }

  handleChangePage = side => {
    const currentPage = document.location.pathname

    if (!!NAVIGATION[currentPage][side]) {
      this.history.push(NAVIGATION[currentPage][side])
    }
  }

  keyboardEvent = e => {
    const key = e.key ? e.key : e.which

    if (key === 'ArrowUp' || key === 'ArrowRight') {
      this.handleChangePage('next')
    } else if (key === 'ArrowDown' || key === 'ArrowLeft') {
      this.handleChangePage('prev')
    }
  }

  history = createBrowserHistory()

  renderRoot() {
    return <Redirect to={URL_WAITING_PAGE} />
  }

  renderRoute({ path, component }) {
    return <Route key={path} path={path} component={() => component} />
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={this.history}>
          <Switch>
            <Route exact path="/" render={this.renderRoot} />
            {ROUTES.map(this.renderRoute)}
            <NotFoundPage />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
