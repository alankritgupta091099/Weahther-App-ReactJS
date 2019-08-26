import React, { Component } from 'react'

class weather extends Component {
    render() {
        if(this.props.error)
        return(this.props.error)
        else if(this.props.temperature)
        return (
            <div className="weather__info">
                <p className="weather__key">Location: <span>{this.props.city},{this.props.country}</span></p>
                <p className="weather__key">Temperature: <span>{this.props.temperature}</span></p>
                <p className="weather__key">Humidity: <span>{this.props.humidity}</span></p>
                <p className="weather__key">Condition:<span>{this.props.description}</span></p>   
            </div>
        )
        else
        return(
            <div></div>
        )
    }
}

export default weather