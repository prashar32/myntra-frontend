import React from 'react';
import DetailImage from './DetailImage';
import './DetailPage.css';
import {ProductConsumer} from '../../Context';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const DetailPage = () => {
	const data = {
		title : 'Shirts For Men & Women',
		itemTitle: '',
		countItem : ''
	}
	const reviews = {
		fontSize:'14px',
		border:'1px solid lightgray',
		borderRadius:'3px',
		background:'white'
	}
	return (
		<React.Fragment>
			<ProductConsumer>
				{value => {
					const {id, title, img, groupImg, price, flat, discount, info, tag, category, inBag, inWishlist} = value.detailProduct;
					
			return(

			<div >
			<Breadcrumbs data={data} />
            <div className="detail-container">
                <div className="imagesHolder">
                {groupImg.map((img,index) => {
					return (
						<div key={index}><DetailImage id={id}  image={img} /></div>
					)})}
                </div>
                <div className="optionsHolder">
                <h4>{title}</h4>
					<p style={{fontSize:'18px',color:'gray'}}>{info}</p>
					<button className="p-2" style={reviews}><i className="fa fa-tag"></i> 768 Reviews</button>
					<hr/>
					<span className="card-bottom-text" style={{ fontSize:'20px'}}>
                        <span className="cost">Rs. {price} </span> 
                        <del>Rs. {flat}</del> 
                        <span className="off"> ( {Math.trunc(100 - (((flat-price)/flat)*100))}% OFF )</span>
						<p className="text-success" style={{fontSize:'15px'}}>Inclusive of all taxes</p>
                    </span>
					<h6>SELECT SIZE <span className="text-danger ml-4">SIZE CHART</span></h6>
					<div className="circle-buttons">
						<button className="ml-0">38</button>
						<button>40</button>
						<button>42</button>
						<button>44</button>
						<button>46</button>
					</div>
					<div className="row d-flex">
						<button className="add-to-bag-btn" disabled={inBag} onClick={ () => value.addToBag(id) }><i className="fa fa-shopping-bag"></i> ADD TO BAG</button>
						<button className="wishlist-btn" disabled={inBag || inWishlist} onClick={()=>value.addToWishList(id)}><i className="fa fa-heart-o"></i> WISHLIST</button>
					</div>
                </div>
            </div>            
            
            </div>
				)
			}}
		
		</ProductConsumer>
		
		</React.Fragment>
		
	);
}

export default DetailPage;