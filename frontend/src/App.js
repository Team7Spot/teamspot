import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom"
import "./App.css"

// Pages
import HomePage from "./pages/HomePage/HomePage"
import AppPage from "./pages/AppPage/AppPage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/app" exact component={AppPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default withRouter(App)
