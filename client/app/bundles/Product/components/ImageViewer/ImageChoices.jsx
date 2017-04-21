import PropTypes from 'prop-types';
import React from 'react';

export default class ImageChoices extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeImage(e.target);

  }

  render() {
    var that = this;


    return (

      <div id="image-viewer-choices">
        { this.props.productImages.map(function(imageLink, i){ return <img onClick={that.handleClick} id={'image-product-' + i} key={'image-product-' + i} className="image-choices" src={imageLink} /> })}
        { this.props.productOptions.map(function(option) { return option.option_image }).map(function(imageLink, i){ return <img id={'image-option-' + i} key={'image-option-' + i} onClick={that.handleClick} className="image-choices"  src={imageLink} /> }) }
      </div>
    );
  }
}
