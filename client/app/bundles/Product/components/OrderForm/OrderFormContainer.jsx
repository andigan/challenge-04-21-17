import PropTypes from 'prop-types';
import React from 'react';

{/* <input type="number" className="product-quantity" value="1" min="1" max="100"></input> */}


export default class OrderForm extends React.Component {
  constructor(props, _railsContext) {
    super(props);

    this.setOption = this.setOption.bind(this);

    this.product = this.props.product;

    this.state = { currentOption: this.product.options[0] }
  }

  setOption(e) {
    var currentOption = this.product.options[e.target.getAttribute('data-option')];

    this.setState({ currentOption: currentOption })
    this.props.setOption(currentOption);
  }

  render() {
    var that = this;

    // fun to write this, but should probably just use the index in the state
    var currentIndex = this.product.options.findIndex(function(item){
      return (item.option_name === that.state.currentOption.option_name);
    });

    return (

      <div id="order-form-container">
        <div className="product-name">
          {this.product.product_name}
        </div>
        <div className="product-tagline">
          {this.product.product_tagline}
        </div>
        <div className="product-price">
          {this.state.currentOption.option_price}
        </div>
        <div className="options-container">
          <div className="options-text">
            Option :
          </div>
          <div className="options-buttons">
            {this.product.options.map(function(option, i) { return <div onClick={that.setOption} id={"option-button" + i} key={"option-button" + i} className={i === currentIndex ? "option-button option-selected": "option-button"} data-option={i}> {option.option_name} </div>})}
          </div>
        </div>
        <div className="quantity-drop-down">
          Qty :
        </div>


        <div className="purchase-button">
          ADD TO BASKET
        </div>


      </div>
    );
  }
}
