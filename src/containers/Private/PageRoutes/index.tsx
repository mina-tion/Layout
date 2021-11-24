import React from 'react'
import { observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main'


const PrivatePages: React.FC = observer(() => {
  return (
    <Switch>
      <Route exact path="/main" component={Main} />
    </Switch>
  )
})

export default PrivatePages
