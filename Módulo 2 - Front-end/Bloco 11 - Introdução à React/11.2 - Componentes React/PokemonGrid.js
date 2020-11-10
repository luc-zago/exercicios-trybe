import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    
    const { name, image, type, averageWeight, moreInfo } = this.props.pokemon;
    /*
    const name = this.props.name;
    const image = this.props.image;
    const type = this.props.type;
    const value = this.props.averageWeight.value;
    const measurementUnit = this.props.averageWeight.measurementUnit;
    const moreInfo = this.props.moreInfo; */

    return (
      <div className="pokemon">
        <h2>{name}</h2>
        <img src={image} alt={name}></img>
        <h3>{type}</h3>
        <h3>{`Average weight:${averageWeight.value}${averageWeight.measurementUnit}`}</h3>
        <span><a href={moreInfo} target="_blank" rel="opener">More info</a></span>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.number.isRequired
    }),
    moreInfo: PropTypes.string.isRequired
  }).isRequired,
}

export default Pokemon
  