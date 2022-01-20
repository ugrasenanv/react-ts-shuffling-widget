import React, { Component, LegacyRef } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDOMServer from 'react-dom/server';

interface AppProps {}
interface AppState {
  name: string;
}

const el = document.createElement('div');
el.className = 'marker';

const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
class App extends Component<AppProps, AppState> {
  myRef: LegacyRef<HTMLUListElement>;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
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
          {/* <ul id="container"  ref= {this.myRef}></ul> */}
          {numbersArray.map((item, index) => (
            <ul data-index={item}>{item}</ul>
          ))}
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
