import PropTypes from 'prop-types';
import React from 'react';
import ImageViewerContainer from './ImageViewer/ImageViewerContainer';
import OrderFormContainer from './OrderForm/OrderFormContainer'

export default class Product extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = { currentImage: this.props.product_images[1], currentOption: this.props.options[0] }
  }

  setOption(option) {
    this.setState({currentImage: option.option_image, currentOption: option} );
  }


  render() {
    return (
      <div id="product-container">
        <ImageViewerContainer productImages={this.props.product_images} productOptions={this.props.options} currentImage={this.state.currentImage}/>
        <OrderFormContainer product={this.props} setOption={this.setOption.bind(this)}/>
      </div>
    );
  }
}
