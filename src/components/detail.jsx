import React from 'react';
import { connect } from 'react-redux';
import { getImages } from '../action-creators';
import Spinner from './spinner';

export class Detail extends React.Component {

	imageUrl() {
		if (this.props.imageList.length === 0) {
			this.props.getImages();
			return '';
		} else {
			const { id } = this.props.params;
			return this.props.imageList.find((i) => `${i.id}` === id).url;
		}
	}

	render() {
		return (
			<div>
			{this.props.isLoading ?
				<Spinner/> :
				<div>
					<div className="row m-t-4">
						<button 
							type="button" 
							className="btn center-block" 
							onClick={() => this.props.getImageDetails(this.imageUrl())}>
							Show image details
						</button>
						{ this.props.imageDetails && alert(this.props.imageDetails) }
					</div>
					<div className="row m-t-4">
						<div className="col-md-12">
							<img className="img-responsive center-block" src={this.imageUrl()} />
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    imageList: state.get('imageList').toJS(),
	isLoading: state.getIn(['view', 'isLoading']),
    imageDetails: state.get('imageDetails'),
  };
}

function mapDispatchToProps(dispatch) {
	return {
		getImages: () => dispatch(getImages()),
		getImageDetails: (url) => dispatch({type: 'GET_IMAGE_DETAILS', url})
	}
}

export const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);
