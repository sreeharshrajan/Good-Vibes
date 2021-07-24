import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class quoteBox extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.Color = randomColor;

    return (
      <div className="quoteBox">
        <i class="quoteSymbol">  <FontAwesomeIcon icon={faQuoteLeft} /> </i>
        <div
          className="fadeIn "
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote" class="quoteText">{this.props.quote}</h1>
          <h5 id="author">
            - {this.props.author ? this.props.author : "Unknown"}
          </h5>
        </div>





        <button
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>

    );
  }
}

export default quoteBox;