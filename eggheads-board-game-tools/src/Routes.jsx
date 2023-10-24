import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from '../src/app/page'
import { TableTopPage } from './pages/TableTopPage'
import { BoardGamesPage } from './pages/BoardGamesPage'
import { MiniaturesPage } from './pages/MiniaturesPage'
import { NotFoundPage } from './pages/NotFoundPage'

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path='/'>
                    <Home/>
                </Route>
                <Route path='/tableTop'>
                    <TableTopPage/>
                </Route>
                <Route path='/miniatures'>
                    <MiniaturesPage/>
                </Route>
                <Route path='/boardGames'>
                    <BoardGamesPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}