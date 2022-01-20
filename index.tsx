import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
  shuffleArray = (e) => {};

  sortArray = (e) => {};

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <main>
          <ul id="cube-container"></ul>
          <div className="btn-wrapper">
            <button onClick={this.shuffleArray}>SHUFFLE</button>
            <button onClick={this.sortArray}>SORT</button>
          </div>
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
