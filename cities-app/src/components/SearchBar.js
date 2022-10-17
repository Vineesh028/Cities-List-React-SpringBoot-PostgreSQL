import React from 'react';
import searchImage from '../citysearch.png';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div  className="search-bar" >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div > 
            <img ref={this.imageRef} alt='' src={searchImage} />
          </div>
          <div className="field">
           
            <input
              type="text" placeholder='Type your city name'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
