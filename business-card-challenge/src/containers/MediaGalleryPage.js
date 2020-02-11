

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  selectNameAction, searchMediaAction
 } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';

import '../styles/style.css';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    //  this.handleSelectName = this.handleSelectName.bind(this);
   
  }

  // Dispatches *searchMediaAction*  immediately after initial rendering
 componentDidMount() {
    this.props.dispatch(searchMediaAction('name'));
  }

  // Dispatches *selectImageAction* when any name is clicked
  handleSelectName(selectedName) {
    this.props.dispatch(selectNameAction(selectedName));
  }

 

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { names, selectedName } = this.props;
    return (
      <div className="container-fluid">
        {names && selectedName? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
       className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotoPage
              names={names}
              selectedName={selectedName}
              onHandleSelectName={this.handleSelectName}
            />
           
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

// Define PropTypes
// MediaGalleryPage.propTypes = {
//   names: PropTypes.array,
//   selectedName: PropTypes.object,
//   dispatch: PropTypes.func.isRequired
// };

 // Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ names }) => ({
  names: names[0],
  selectedName: names.selectedName,
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(MediaGalleryPage);