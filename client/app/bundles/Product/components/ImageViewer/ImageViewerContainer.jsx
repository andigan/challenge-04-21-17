import PropTypes from 'prop-types';
import React from 'react';
import ImageChoices from './ImageChoices'
import ImageMain from './ImageMain'

export default class ImageViewer extends React.Component {
  constructor(props, _railsContext) {
    super(props);

    this.state = { currentImage: this.props.currentImage }
  }

  componentWillReceiveProps(nextProps) {
    this.setState( {currentImage: nextProps.currentImage});

  }

  changeImage(target) {
    this.setState({currentImage: target.src });
  }

  render() {

    return (

      <div id="image-viewer-container">
        <ImageChoices productImages={this.props.productImages} productOptions={this.props.productOptions} changeImage={this.changeImage.bind(this)} />
        <ImageMain currentImage={this.state.currentImage} />
      </div>
    );
  }
}
