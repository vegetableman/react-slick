import React, { Component } from 'react'
import Slider from '../src/slider'

export default class DisabledSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 10000);
  }

  render() {
    const settings = {
      dots: true,
      infinite: !this.state.disabled,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      disabled: this.state.disabled,
      className: 'simple-slider',
    };
    return (
      <div>
        <h2> Disabled at first</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
