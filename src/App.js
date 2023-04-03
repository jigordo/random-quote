import React from 'react';
import quotes from './QuoteDatabase';
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import random from './RandomColor'
 



class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       quote: quotes[0].quote,
       author: quotes[0].author,
     }

    this.handleClick = this.handleClick.bind(this);
   }

   randomQuote() {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      return quotes[randomNumber]
  }

  shuffleQuotes(array){
      return array.sort(()=>Math.random()-0.5)
  }

    handleClick() {
      const generateRandomQuote = this.randomQuote()
      this.setState({
       quote: generateRandomQuote.quote,
       author: generateRandomQuote.author
   }) 
   this.shuffleQuotes(quotes)
   random()
}

  render(){
    
    return (
        <div id="quote-box">
            <p id='text' className='text-color'>{this.state.quote}</p>
            <p id='author' className='text-end text-color'>-{this.state.author}</p>
            <div className="d-flex justify-content-between">
              <a href="https://twitter.com/?lang=en" id="tweet-quote"
              className='change'><FontAwesomeIcon  icon={faTwitter} /></a>
              <button type="button" className="change" 
              onClick={this.handleClick}>New Quote</button>  
            </div>
        </div> 
    )
  }
  
}

export default QuoteMachine;
