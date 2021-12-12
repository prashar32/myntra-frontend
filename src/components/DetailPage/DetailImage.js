import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import Modal from '../WishListOrZoom';

const DetailImage = (props) => {
    const [modalOpen, closeModal] = useState(false);
    
    return (
        <React.Fragment>
            <div className="detail_container" onClick={() => {closeModal(!modalOpen);}}>
                <img src={props.image} className="img-fluid" style={{height:'520px'}} />
            </div>
            <div className="modal_container" style={!modalOpen?{display:'none'}:{display:'block'}}>
				<div className="container">
					<div className="row">
						<div id="modal" className="col-6 col-md-6 pb-3 col-lg-6 mx-auto text-center text-capitalize">
							<i className="fa fa-close fa-2x pull-right" style={{cursor:'pointer'}} onClick={()=>{closeModal(false)}}></i>
							<img src={props.image} className="img-fluid py-2" width="600px" height="620px" alt="product"/>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    );
}

export default DetailImage;