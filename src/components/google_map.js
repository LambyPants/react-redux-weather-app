import React, {Component} from 'react';


class GoogleMap extends Component {


    
    componentDidMount() {
        {
        // eslint-disable-next-line 
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: Number(this.props.lat),
                lng: Number(this.props.lon)
            }
        });
    }
    }
    
        componentDidUpdate() {
    // eslint-disable-next-line 
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: Number(this.props.lat),
                lng: Number(this.props.lon)
            }
        });
    }
  
    
    render() {
        return <div ref="map" />;
          
          
          
            
    }
}

export default GoogleMap;