import React from 'react';

class EditView extends React.Component {

    state = { cityName: '', imageUrl:''};
    constructor(props) {
        super(props);

    }
    onFormSubmit = event => {
        event.preventDefault();
     
        this.props.onSubmit(this.state.cityName, this.state.imageUrl);
    };

    onFormCancel = event => {
        event.preventDefault();
     
        this.props.onCancel();
    };

    render(){
        return(
            <div  className="edit-view" >
        <form  className="ui form">
        <input
              type="text" placeholder={this.props.name}
              value={this.state.cityName}
              onChange={e => this.setState({ cityName: e.target.value })}
            />
             <input
              type="text" placeholder={this.props.image}
              value={this.state.imageUrl}
              onChange={e => this.setState({ imageUrl: e.target.value })}
            />
            <button onClick={this.onFormSubmit}>
                Submit
            </button>
            <button onClick={this.onFormCancel}>
                Cancel
            </button>
        </form>
      </div>




        );
    }

}

export default EditView;
