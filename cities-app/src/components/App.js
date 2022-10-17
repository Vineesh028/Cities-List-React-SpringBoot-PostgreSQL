import React from "react";
import './App.css';
import SearchBar from './SearchBar';
import CityList from './CityList';
import CityAPIs from '../api/CityAPIs';


class App extends React.Component {

  
  state = { images: [] };

  async componentDidMount(){
    // CityAPIs.get('/', {
    
    // })
    // .then(data => this.setState({images: data}))
    // .catch(err => console.error(err));

    const response = await CityAPIs.get('/', {
      crossDomain: true,
    
      headers: {
        "Content-Type": "application/json"
    }
    
    });

    console.log(response);
    this.setState({ images: response.data });
    console.log('App componentDidMount: ',this.state.images);
  }


  onSearchSubmit = async term => {
    const response = await CityAPIs.get(`/city/${term}`, {

      crossDomain: true,
     
      headers: {
        "Content-Type": "application/json"
    }
    
    });

    console.log(response);
    this.setState({ images: response.data });
  };

  render() {
    
      console.log('this.state.images ###: ',this.state.images);
      return (
        <div className="ui container"  >

          <div className="search-bar">
              <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
          <div style={{ marginTop: '150px' }}>
             <CityList images={this.state.images} />
          </div>            
        </div>
      );
   
   
  }

}

export default App;
