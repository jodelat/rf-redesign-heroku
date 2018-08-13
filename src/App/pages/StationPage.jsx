import React, { Component } from 'react'
import { Station } from 'rf-components'

const StationPage = ({ match }) => {
    const stationId = match.params.id
    return (
        <div>
            <Station id={stationId} />
        </div>
    )
}

export default StationPage
