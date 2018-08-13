import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

/* Routes */
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import PasswordResetPage from './pages/PasswordResetPage'
import ProfilePage from './pages/ProfilePage'
import SectionPage from './pages/SectionPage'
import StationPage from './pages/StationPage'
import StationsPage from './pages/StationsPage'
import SearchPage from './pages/SearchPage'
import TestPage from './pages/TestPage'

const App = ({ user }) => (
    <div>
        {user.loggedIn ? (
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/user" exact component={ProfilePage} />
                <Route path="/login" exact render={() => <NavigationBar transparent={true} />} />
                <Route path="/password-reset" component={PasswordResetPage} />
                <Route path="/station/:id" component={StationPage} />
                <Route path="/stations" render={() => <StationsPage />} />
                <Route path="/search" component={SearchPage} />
                <Route path="/test" component={TestPage} />
                <Route path="*" exact={true} render={() => <div>Page Not Found</div>} />
            </Switch>
        ) : (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/password-reset" component={PasswordResetPage} />
                <Route path="/for-listeners" render={() => <SectionPage name="listeners" />} />
                <Route path="/for-djs" render={() => <SectionPage name="djs" />} />
                <Route path="/for-artists" render={() => <SectionPage name="djs" />} />
                <Route path="/stations" render={() => <StationsPage />} />
                {/*<Route path="/powering-brands"
                       render={() => <div className="appContainer"><NavigationBar/><BrandsPage/><Footer/></div>}/>
                <Route path="/powering-music"
                       render={() => <div className="appContainer"><NavigationBar/><MusicSportsPage/><Footer/></div>}/>
                  <Route path="/powering-education"
                       render={() => <div className="appContainer"><NavigationBar/><EducationPage/><Footer/></div>}/>
                 */}
            </Switch>
        )}
    </div>
)

App.propTypes = {
    user: PropTypes.shape({}).isRequired
}

export default withRouter(connect(state => ({ user: state.user }))(App))
