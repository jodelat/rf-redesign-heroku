import React, { Component } from 'react'
import { connect } from 'react-redux'
import widgetActions from 'store/widget/actions'
import SearchContainer from 'rf-components/search'
import { stationActions } from 'store/station/actions'
import { stationService } from 'store/station/service'

class TestPage extends Component {
    async componentDidMount() {
        // const res = await stationService.addFavoriteStation(2327667345, 2359917494)
        // console.log('res', res)

        // this.props.doFavoriteStation( 2327667345, 2359917494)
        // if (this.props.widget) console.log(this.props.widget)
        // if (!this.props.widget) {
        //     this.props.doWidgetDetails()
        // }
    }

    render() {
        console.log('test props', this.props)
        console.log('station serv', stationService)
        return (
            <div>
                {/* hello {JSON.stringify(this.props)} */}
                <SearchContainer />
            </div>
        )
    }
}

const select = state => ({
    widget: state.widget
})

export default connect(select, { ...widgetActions, ...stationActions })(TestPage)
