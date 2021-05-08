import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Editor from 'js/components/editor'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={`/documents/${uuidv4()}`} />
        </Route>
        <Route path='/documents/:id' exact>
          <Editor />
        </Route>
      </Switch>
    </Router>
  )
}

App.propTypes = {}

App.defaultProps = {}

export default App
