import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card2 from './components/Card2/Card2';
import Footer from './components/Footer/Footer';
import cards from './cards.json';
import './App.css';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0,
    message: 'Click Image Below To Start'
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;

          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });

          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };
  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Hero />
        {this.state.cards.map(card => (
          <Card2
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
