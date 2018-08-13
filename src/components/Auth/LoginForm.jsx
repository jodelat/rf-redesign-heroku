import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../store/user/actions.js'
import { FadeLoader } from 'react-spinners'
import { Button, FormGroup, Form, Col, FormFeedback, Input, Alert } from 'reactstrap'
import { userActions } from '../../store/user/actions'
import { alertActions } from '../../store/actions'
import { alertConstants } from '../../constants'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    state = {
        user: {
            username: '',
          password: ''
        },
      submitted: false
    }

    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        const { dispatch } = this.props
        dispatch(alertActions.clear())
    }

    handleSubmit(event) {
        event.preventDefault()
        const { user } = this.state
        const { dispatch } = this.props
        this.setState({ submitted: true })
        if (user.username && user.password) {
            // Oauth Authentication
            dispatch(userActions.authenticate(user.username, user.password))
            //dispatch(userActions.webAuth(user.username, user.password))
        } else {
            var msg = {}
            if (!user.username) {
                msg.username = 'Username Required'
            }
            if (!user.password) {
                msg.password = 'Password Required'
            }
            dispatch(alertActions.error(msg))
        }
    }

    inputChange(event) {
        const { name, value } = event.target
      const {user, submitted} = this.state;
        const { dispatch } = this.props
        this.setState({
            user: {
                ...user,
              [name]: value
            },
        })
    }

    render() {
        const { user, alert } = this.props
        const { submitted } = this.state
        if (submitted) {
            var usernameValid, passValid
            if (
                !this.state.user.username ||
                (alert.type == alertConstants.ERROR && alert.message.username)
            ) {
                usernameValid = false
            } else {
                usernameValid = true
            }
            if (
                !this.state.user.password ||
                (alert.type == alertConstants.ERROR && alert.message.password)
            ) {
                passValid = false
            } else {
                passValid = true
            }
        }
        return (
            <Form onSubmit={this.handleSubmit} id="login" className="text-center">
                {/*{submitted && (alert.type == alertConstants.ERROR) &&
                <Alert color="danger"> {alert.message} </Alert>}*/}
                <Col xs={12} className="p-0">
                    <FormGroup>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.inputChange}
                            ref="username"
                            className="text-white"
                            valid={usernameValid}
                            invalid={
                              !usernameValid &&
                              alert.message &&
                              typeof alert.message.username !== 'undefined'
                            }
                        />
                        {!usernameValid &&
                        alert.message && (
                            <FormFeedback className="d-block">
                              {alert.message.username}
                            </FormFeedback>
                        )}
                    </FormGroup>
                </Col>
                <Col xs={12} className="p-0">
                    <FormGroup>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.inputChange}
                            ref="password"
                            className="text-white"
                            valid={passValid}
                            invalid={
                              !passValid &&
                              alert.message &&
                              typeof alert.message.password !== 'undefined'
                            }
                        />
                        {!passValid &&
                        alert.message && (
                            <FormFeedback className="d-block">
                              {alert.message.password}
                            </FormFeedback>
                        )}
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Link to="/password-reset">Forgot Password</Link>
                </Col>
                <Col>
                    <FormGroup>
                        <Button type="submit" className="rf-button">
                            Sign in
                        </Button>
                    </FormGroup>
                </Col>
                <div className={submitted && user.authenticating ? 'overlay' : ''} />
                <div className="sweet-loading">
                    <FadeLoader
                        color={'#36D7B7'}
                        loading={submitted && user.authenticating ? true : false}
                    />
                </div>
            </Form>
        )
    }
}

LoginForm.propTypes = {
  login: PropTypes.func
}
const mapStateToProps = state => ({ user: state.user, alert: state.alert })
export default connect(mapStateToProps)(LoginForm)
