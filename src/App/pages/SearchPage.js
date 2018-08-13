import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { HomeNav } from 'rf-components/nav'
import Hr from 'style/elements/hr/'
import { Col, Container, Row } from 'reactstrap'
import SearchBar from 'rf-components/search/Searchbar'

import {
    selectFlagSearches,
    selectUserSearches,
    selectStationsSearches
} from 'store/search/selectors'

const Wrapper = styled(Container)`
    margin-top: 100px;
`

class SearchPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchType: null
        }

        this.toggleSearchType = this.toggleSearchType.bind(this)
    }

    toggleSearchType = searchType => {
        this.setState({ searchType })
    }

    render() {
        const { searchType } = this.state
        const { users, flags, stations } = this.props
        console.log('users', users)
        console.log('flags', flags)
        const stationData =
            stations.result &&
            stations.result.map((item, index) => (
                <div className="col-6 col-md-3 my-2" key={`${item.name}index`}>
                    <h3>
                        {item.name} <i className="fa fa-heart-o" aria-hidden="true" />
                    </h3>
                    <a href={item.url} target="_blank">
                        website
                    </a>
                </div>
            ))
        const userData =
            users.result &&
            users.result.map((item, index) => (
                <div className="col-6 col-md-3 my-2" key={`${item.fullname}index`}>
                    <h3>{item.fullname}</h3>
                </div>
            ))
        const flagData = flags.result.map((item, index) => (
            <div className="col-6 col-md-3 my-2" key={`${item.id}index`}>
                <h3>{item.author.username}</h3>
                <p>{item.message}</p>
                {item.tags.map(tag => <p>#{tag}</p>)}
            </div>
        ))
        return (
            <React.Fragment>
                <HomeNav />
                <Wrapper>
                    <Row>
                        <h1>Search Page</h1>
                    </Row>
                    <Row>
                        <SearchBar
                            toggleSearchType={this.toggleSearchType}
                            searchType={this.state.searchType}
                        />
                    </Row>
                    <Row>{searchType === 'stations' && stationData}</Row>
                    <Row>{searchType === 'users' && userData}</Row>
                    <Row>{searchType === 'flags' && flagData}</Row>
                </Wrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    flags: selectFlagSearches(state),
    stations: selectStationsSearches(state),
    users: selectUserSearches(state)
})

export default connect(mapStateToProps)(SearchPage)
