import React, { Component } from 'react';
import { clg_lists, renderClgLists } from './clg_lists';
import Autocomplete from 'react-autocomplete';
//import './App.css';
import './index.css';

class App extends Component {

  state = { list: '' };

  render() {
    return (
      <div className="autocomplete-wrapper">
        <h2><bold>AUTOCOMPLETE TEXT BOX</bold></h2>
        <Autocomplete
          value={this.state.list}
          items={clg_lists()}
          getItemValue={item => item.Name}
          shouldItemRender={renderClgLists}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.Name}
            </div>
          }
          onChange={(event, list) => this.setState({ list })}
          onSelect={list => this.setState({ list })}
        />
      </div>
    );
  }
}

export default App;