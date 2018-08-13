import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userActions } from '../../store/user/actions.js'
import { Button, FormGroup, FormFeedback, Form, Col, Input } from 'reactstrap'
import swal from 'sweetalert'
import { alertConstants } from '../../constants'
import { alertActions } from '../../store/actions'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                username: '',
                password: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        const { dispatch } = this.props
        dispatch(alertActions.clear())
    }

    handleSubmit(event) {
        event.preventDefault()
        const { user } = this.state
        const { dispatch } = this.props
        this.setState({ submitted: true })
        if (user.email && user.username && user.password) {
            dispatch(userActions.register(user))
        } else {
            var msg = {}
            if (!user.email) {
                msg.email = 'Email Required'
            }
            if (!user.username) {
                msg.username = 'Username Required'
            }
            if (!user.password) {
                msg.password = 'Password Required'
            }
            dispatch(alertActions.error(msg))
        }
    }

    handleChange(event) {
        const { name, value } = event.target
        const { user } = this.state
        const { dispatch } = this.props
        dispatch(alertActions.clear())
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.submitted && nextProps.alert.type == alertConstants.SUCCESS) {
            swal({
                className: 'sweetalert',
                icon: 'success',
                title: 'Registration Successful',
                button: 'Login'
            }).then(() => {
                const { user } = nextState
                const { dispatch } = this.props
                dispatch(userActions.webAuth(user.username, user.password))
                //TODO: later uncomment - dispatch(userActions.authenticate(user.username, user.password));
            })
            return false
        }

        return true
    }

    render() {
        const { registeration, alert } = this.props
        const { user, submitted } = this.state
        if (submitted) {
            var usernameValid, passValid, emailValid
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
            if (
                !this.state.user.email ||
                (alert.type == alertConstants.ERROR && alert.message.email)
            ) {
                emailValid = false
            } else {
                emailValid = true
            }
        }
        return (
            <Form
                inline={this.props.inline}
                className={
                    this.props.inline
                        ? 'row align-items-start'
                        : 'text-center row align-items-start'
                }
                onSubmit={this.handleSubmit}>
                <Col
                    xs={{ size: 10, offset: 1 }}
                    md={this.props.inline ? { size: 3, offset: 1 } : { size: 12, offset: 0 }}>
                    <FormGroup className="m-1">
                        <Input
                            type="text"
                            placeholder="Username"
                            onChange={this.handleChange}
                            ref="username"
                            name="username"
                            valid={usernameValid}
                            className="text-white w-100 m-0"
                        />
                        {!usernameValid &&
                            alert.message && <FormFeedback>{alert.message.username}</FormFeedback>}
                    </FormGroup>
                </Col>{' '}
                <Col
                    xs={{ size: 10, offset: 1 }}
                    md={this.props.inline ? { size: 3, offset: 0 } : { size: 12, offset: 0 }}>
                    <FormGroup className="m-1">
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                            ref="email"
                            valid={emailValid}
                            className="w-100 m-0 text-white"
                        />
                        {!emailValid &&
                            alert.message && <FormFeedback>{alert.message.email}</FormFeedback>}
                    </FormGroup>
                </Col>{' '}
                <Col
                    xs={{ size: 10, offset: 1 }}
                    md={this.props.inline ? { size: 3, offset: 0 } : { size: 12, offset: 0 }}>
                    <FormGroup className="m-1">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            ref="password"
                            className="w-100 m-0 text-white"
                            valid={passValid}
                        />
                        {!passValid &&
                            alert.message && <FormFeedback>{alert.message.password}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col
                    xs={12}
                    md={this.props.inline ? 2 : 12}
                    className={this.props.inline ? '' : 'mt-3'}>
                    <Button
                        type="submit"
                        size={this.props.inline ? 'md' : ''}
                        className={this.props.inline ? 'm-0 rf-button' : 'rf-button'}>
                        {registeration.registering && submitted ? (
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        ) : (
                            'Sign Up'
                        )}
                    </Button>
                </Col>
            </Form>
        )
    }
}

/*if(true){
    swal({
        className: 'sweetalert',
        icon: "success",
        title: 'Registration Successful',
        button: "Login",
    })
}*/

RegisterForm.propTypes = {
    inline: PropTypes.bool
}

const mapStateToProps = state => ({ registeration: state.registration, alert: state.alert })
export default connect(mapStateToProps)(RegisterForm)
