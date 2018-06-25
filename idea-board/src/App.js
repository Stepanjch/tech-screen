import React, {Component} from 'react';

import './App.css';

export default class App extends Component {
  state = {
    test: 'Some quick example text to build on the card title and make up the bulk of  the card\'s content. 140'
  };

  render() {
    return (
      <div id='ideaBoardContainer'>
        <div className="card">
          <div className="card-body">
            <input type="text" value={'Card title'} onChange={() => null} className="card-title"/>
            <textarea
              maxLength="140"
              style={{
                boxSizing: 'border-box',
                border: 'none',
                width: '100%',
              }}
              className="card-text"
              value={this.state.test}
              ref={textarea => this.textarea = textarea}
              onChange={(event) => {
                const {value} = event.target;
                if (value.length <= 140) {
                  this.setState({test: event.target.value}, () => this.textarea.style.height = `${this.textarea.scrollHeight}px`)
                }
              }}
            />
            <div className="card-footer text-right">
              <button className="btn">
                <i className="fa fa-trash-o" aria-hidden="true"/>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <input type="text" value={'Card title'} onChange={() => null} className="card-title"/>
            <textarea
              maxLength="140"
              style={{
                width: '100%',
              }}
              className="card-text"
              value={this.state.test}
              onChange={(event) => console.log(event.target.value)}
            />
            <div className="card-footer text-right">
              <button className="btn">
                <i className="fa fa-trash-o" aria-hidden="true"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
