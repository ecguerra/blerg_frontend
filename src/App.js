import { Switch, Route } from 'react-router-dom'

import Layout from './components/common/Layout'
import Home from './components/Home'
import About from './components/About'
import './style/style.scss'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/','/home']} component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Layout>
  )
}

export default App
