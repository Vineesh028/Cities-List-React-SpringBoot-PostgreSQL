import React from 'react';
import './CityGrid.css';
import EditView from './EditView'; 
import CityAPIs from '../api/CityAPIs';
import noImage from '../no-image-available-icon.jpg';

class CityGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 , edit : false , editView : false, imageStatus: "loading", error: false};

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  onEditSubmit = async (cityName, imageUrl) => {

    const city = {id:`${this.props.cityId}`, city_name:`${cityName}`, photo:`${imageUrl}` };
 
    const response = await CityAPIs.put(`/${this.props.cityId}`, city);


    this.setState({ images: response.data });
  };

  onEditCancel = async ()=>{

    console.log('onEditCancel !!!!');
    this.setState({edit : false , editView : false});

  };

  setSpans = () => {
    const height = this.imageRef.current.clientHeight+20;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  imageClick = () => {
    console.log('Click!!!!');
    if(!this.state.edit){
        this.setState({edit : true});
    }
    else{
        this.setState({edit : false});
    }
    
    console.log('Click edit!!!!',this.state.edit);
  }    
  
  editClick = () => {
    console.log('editClick!!!!');
    this.setState({edit : false , editView : true});
  }  

  onError = () => {
 
      this.setState({
        src: this.props.fallbackSrc,
        errored: true,
      });
   
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded", error: false });
  }

  handleImageError() {
    this.onError=null
    this.setState({ imageStatus: "failed to load", error: true });
   
  }

  

  render() {
   
    let edit ;
    let editView ;
    if(this.state.edit){
        edit = 'Click here to edit';
    }
    if(this.state.editView){
        editView = <EditView onSubmit={this.onEditSubmit} onCancel={this.onEditCancel} cityId={this.props.cityId} name={this.props.name} image={this.props.image}/>
    }

   
  
    
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }} className = "head-text">
        <div className = "head-image">
        <img class='resize_fit_center' ref={this.imageRef} alt='' src={this.state.error ? noImage : this.props.image} onDoubleClick={this.imageClick}  
        onLoad={this.handleImageLoaded.bind(this)} 
        onError={this.handleImageError.bind(this)} 
        
        />
        </div>
        <div className="center-text" onDoubleClick={this.editClick} >
          <h3> {edit} </h3> 
          <div className="edit-view">{editView}</div>
                  
        </div>      
       <div className="city-text" >
        {this.props.name}  
       </div>        
      </div>
    );
  }
}

export default CityGrid;