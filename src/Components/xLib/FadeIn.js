import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class FadeIn extends Component {
  componentDidMount() {
       var Point = this;
      // Get the components DOM node
      var Animotion = ReactDOM.findDOMNode(Point);
      // Set the opacity of the element to 0
      Animotion.style.opacity = 0;
      window.requestAnimationFrame(function () {
        // Now set a transition on the opacity
        Animotion.style.transition = Point.props.transition || "opacity 1000ms";
        // and set the opacity to 1
        Animotion.style.opacity = 5;
      });
    }
  
    render() {
      return (
        <React.Fragment>
            {this.props.children}
        </React.Fragment>
      )
    }
  }
export default FadeIn  