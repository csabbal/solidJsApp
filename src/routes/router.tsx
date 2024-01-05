import { Route, Router } from '@solidjs/router'
import List from '../components/list/List'
import Item from '../components/item/Item'

function RouterComponent() {
  return (
      <Router>
        <Route path="/list/list" component={List} />
        <Route path="/list/:characterId" component={Item} />
      </Router>
  )
}
export default RouterComponent
