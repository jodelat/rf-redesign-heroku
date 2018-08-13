import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { searchActions } from '../../store/search/actions'
import { stationActions } from '../../store/station/actions'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchType: null,
            query: null
        }
    }

    componentDidMount() {
        this.props.doFavoriteStationAction(134077351)
    }

    handleSearchSubmit = evt => {
        evt.preventDefault()
        switch (this.props.searchType) {
            case 'users':
                this.props.getSearchUsers(this.state.query)
                break
            case 'flags':
                this.props.getSearchFlags(this.state.query)
                break
            case 'stations':
                this.props.getSearchStations(this.state.query)
                break
            default:
                return
        }
    }

    render() {
        const { toggleSearchType } = this.props
        return (
            <Form inline onSubmit={evt => this.handleSearchSubmit(evt)}>
                <FormGroup className="mb-2 mr-2 mb-sm-0">
                    <Label for="search" className="mr-2">
                        Search
                    </Label>
                    <Input
                        type="text"
                        name="search"
                        placeholder="Enter keywords"
                        onChange={e => this.setState({ query: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="flags" className="mr-2">
                        Flags
                    </Label>
                    <Input
                        type="radio"
                        name="searchType"
                        value="flags"
                        onChange={() => this.props.toggleSearchType('flags')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="people" className="mr-2">
                        Users
                    </Label>
                    <Input
                        type="radio"
                        name="searchType"
                        value="users"
                        onChange={() => this.props.toggleSearchType('users')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="stations" className="mr-2">
                        Stations
                    </Label>
                    <Input
                        type="radio"
                        name="searchType"
                        value="stations"
                        onChange={() => this.props.toggleSearchType('stations')}
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { ...searchActions, ...stationActions })(SearchBar)
