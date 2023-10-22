import { Switch, Route } from 'react-router-dom'
import Home from '../home'
import Chat from '../chat'
import TestApi from '../test-api'

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/chat' component={Chat} />
                <Route exact path='/test' component={TestApi} />
            </Switch>
        </div>
    )
}

export default Main