import React from 'react';
import QuotesDB from './constants/quotesList'
import QuoteBox from "./components/quoteBox";

import './assets/styles/nav.css';
import './assets/styles/quoteBox.css';

class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: QuotesDB[0].quote,
            author: QuotesDB[0].author,
        };
    }
    randomQuote() {
        const randomNumber = Math.floor(Math.random() * QuotesDB.length);
        return QuotesDB[randomNumber];

    }
    shuffleQuotes(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    handleClick = () => {
        const generateRandomQuote = this.randomQuote();
        this.setState({
            quote: generateRandomQuote.quote,
            author: generateRandomQuote.author
        });
        this.shuffleQuotes(QuotesDB)
    };

    randomColor() {
        const color = `rgb(
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)})`;
        return color;
    }

    render() {
        return (

            <div className="App">
                <div className="header">
                    <QuoteBox
                        displayColor={this.randomColor}
                        handleClick={this.handleClick}
                        {...this.state}
                    />
                </div>

            </div>
        );
    }
}

export default Quotes;


