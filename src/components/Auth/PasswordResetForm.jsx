import React from 'react'
import { connect } from 'react-redux'
import { FormFeedback, Row, Col, FormGroup, Label, Input, Media, Button } from 'reactstrap'
import { FadeLoader } from 'react-spinners'
import { userActions } from '../../store/user/actions'
import { alertActions } from '../../store/actions'
import { alertConstants } from '../../constants'

class PasswordResetForm extends React.Component {
    state = { userid: '', submitted: false }

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.inputChange = this.inputChange.bind(this)
        const { dispatch } = this.props
        dispatch(alertActions.clear())
    }

    handleSubmit(event) {
        event.preventDefault()
        const userId = this.state.userid
        this.setState({ submitted: true })
        const { dispatch } = this.props

        if (userId) {
            dispatch(userActions.reset_password(userId))
        }
    }

    inputChange(event) {
        const { value } = event.target
        this.setState({ userid: value })
    }

    render() {
        const { user, alert } = this.props
        var userValid
        if (this.state.submitted && alert.type == alertConstants.ERROR && alert.message.user) {
            userValid = false
        } else if (
            this.state.submitted &&
            alert.type == alertConstants.SUCCESS &&
            alert.message.user
        ) {
            userValid = true
            swal('Password Reset!', 'Password Reset Link Sent to the email address', 'success')
        }

        return (
            <form onSubmit={this.handleSubmit} id="password-reset">
                <FormGroup>
                    <Label className="control-label required" for="form_input">
                        Email address or username
                    </Label>
                    <Input
                        type="text"
                        id="form_input"
                        name="form_input"
                        required="required"
                        onChange={this.inputChange}
                        className="form-control"
                        valid={userValid}
                    />
                    {!userValid &&
                        alert.message && <FormFeedback>{alert.message.user}</FormFeedback>}
                </FormGroup>
                <FormGroup className="text-center">
                    <Button type="submit" className="rf-button">
                        Send
                    </Button>
                </FormGroup>
                <div className={this.state.submitted && user.reseting ? 'overlay' : ''} />
                <div className="sweet-loading">
                    <FadeLoader
                        color={'#36D7B7'}
                        loading={this.state.submitted && user.reseting ? true : false}
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ user: state.user, alert: state.alert })
export default connect(mapStateToProps)(PasswordResetForm)
