import PropTypes from 'prop-types';
import React from 'react';

export default class ImageMain extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  render() {

    return (

      <div id="image-viewer-main">
        <img className="image-choices" id={'image-main' } src={this.props.currentImage} />
      </div>
    );
  }
}
