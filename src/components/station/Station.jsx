import React from 'react';
import {connect} from 'react-redux';
import {stationActions} from '../../store/station/actions';
import {alertActions} from '../../store/actions';
import PropTypes from 'prop-types';
import {alertConstants} from '../../constants/rfConstants';
import {Container, Row, Col} from 'reactstrap';
import {Icon} from 'react-fa';
import StationPage from './StationPage.jsx';
import StationNavWidget from './StationNavWidget.jsx';
import StationInfoWidget from './StationInfoWidget.jsx';
import StationFlagWidget from './StationFlagWidget.jsx';
import StationFlagPosts from './StationFlagPosts.jsx';
class Station extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.toggleFavoriteStation = this.toggleFavoriteStation.bind(this)
  }

  componentWillMount() {
    this.onMount = true;
    const {dispatch, station, alert} = this.props;
    dispatch(alertActions.clear());
    dispatch(stationActions.stationById(this.props.id));
    dispatch(stationActions.getStationFlag(this.props.id));
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.onMount = false;
    const {station, alert} = nextProps;
    if ((station.length === 0 && alert.length === 0) || station.requested) {
      return false;
    }
    return true;
  }

  handleFormSubmit = event => {

    event.preventDefault()

    if(!this.state.message){
      alert("Flagcast cant be empty!")
    }
    else{

    }
  }

  toggleFavoriteStation () {
    const {dispatch, station, alert} = this.props;
    stationActions.putFavoriteStation(station.id)
    console.log('it worked')
  }

  render() {
    const {station, alert} = this.props;

    if (station.stationObject != undefined && station.stationFlags != undefined) {
      var stationObj = station.stationObject;
      var flags = station.stationFlags;
      console.log(stationObj)
      console.log(station.stationFlags)
      return (
          <div>
          <StationNavWidget station={stationObj}/>
          <StationInfoWidget station={stationObj} favorite={this.toggleFavoriteStation}/>
          <StationFlagPosts station={stationObj} flags={station.stationFlags}/>
          <StationFlagWidget station={stationObj} handleFormSubmit={this.handleFormSubmit}/>
          </div>
      );
    }
    if (alert.length != 0 && alert.type == alertConstants.ERROR &&
        !this.onMount) {
      return <div>{alert.message}</div>;
    }
    return <div>Loading</div>;
  }
}

Station.propTypes = {
  id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({station: state.station, alert: state.alert});
export default connect(mapStateToProps)(Station);

/*
*
* Sample Station Data
{
  "city": "Pittsburgh",
    "twitter": null,
    "country": "United States",
    "callsign": "WRCT",
    "location": {
  "lat": 40.4441666,
      "lon": -79.943611
},
  "name": null,
    "codecs": [
  "mp3",
  "ffvorbis"
],
    "id": 4679521487814656,
    "phone1": null,
    "created": "2018-03-14T01:13:03.093808",
    "listening": false,
    "state": "Pennsylvania",
    "logo": null,
    "country_code": "US",
    "url": "http://www.wrct.org",
    "streams": [
  {
    "channels": 2,
    "cross_domain": false,
    "rank": 50,
    "bitrate": 32000,
    "icy_server": true,
    "stream": "http://stream.wrct.org:8000/wrct-lo.mp3",
    "audio_rate": 22050,
    "created": "2018-03-14T01:13:03.279074",
    "codec": "mp3",
    "xref_id": 100002,
    "is_shoutcast": false
  },
  {
    "channels": 2,
    "cross_domain": false,
    "rank": 10,
    "bitrate": 128000,
    "icy_server": true,
    "stream": "http://stream.wrct.org:8000/wrct-hi.mp3",
    "audio_rate": 44100,
    "created": "2018-03-14T01:13:03.279176",
    "codec": "mp3",
    "xref_id": 100000,
    "is_shoutcast": false
  },
  {
    "channels": 1,
    "cross_domain": false,
    "rank": 0,
    "bitrate": 140000,
    "icy_server": false,
    "stream": "http://stream.wrct.org:8000/wrct-lo.ogg",
    "audio_rate": 44100,
    "created": "2018-03-14T01:13:03.279310",
    "codec": "ffvorbis",
    "xref_id": 100003,
    "is_shoutcast": false
  },
  {
    "channels": 1,
    "cross_domain": false,
    "rank": 0,
    "bitrate": 140000,
    "icy_server": false,
    "stream": "http://stream.wrct.org:8000/wrct-hi.ogg",
    "audio_rate": 44100,
    "created": "2018-03-14T01:13:03.279245",
    "codec": "ffvorbis",
    "xref_id": 100001,
    "is_shoutcast": false
  }
],
    "email": "info@wrct.org",
    "state_code": "PA",
    "genres": [
  "Modern Rock",
  "Public",
  "College",
  "Varied"
],
    "frequency": "88.3",
    "slogan": null,
    "description": null,
    "active": true,
    "band": "FM",
    "facebook": null
}*/
