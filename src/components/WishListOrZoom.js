import React from "react";
import {ProductConsumer} from "../Context";
import "../App.css";

const WishListOrZoom =  () => {
		return (
        <ProductConsumer>
            {(value) => {
                return <div className="modal_container"  style={!value.modalOpen?{display:'none'}:{display:'block'}}>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-12 col-sm-12 col-md-8 p-5 col-lg-8 mx-auto text-center text-capitalize" style={{fontSize:'12px',overflowX:'auto'}}>
                            <i className="fa fa-close fa-2x pull-right" style={{cursor:'pointer'}} onClick={()=>{value.modalClose("Wishlist")}}></i>
                            <h5 className="text-center pb-3">Wishlist</h5>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Info</th>
                                        <th>Price</th>
                                        <th>Add</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { value.wishlist.length === 0 ? (<tr><td colSpan="6">No Item Added</td></tr>) : value.wishlist.map(item => {
                                        return (
                                            <tr key = {item.id}>
                                                <td><img src={item.img} alt={`wishlist ${item.id}`} className="img-fluid" width="20px" height="20px" /></td>
                                                <td>{item.title}</td>
                                                <td>{item.info}</td>
                                                <td>{item.price}</td>
                                                <td><button className='btn btn-sm btn-info' onClick={ () => value.addToBag(item.id) } >Move To Bag</button></td>
                                                <td><button className='btn btn-sm btn-danger' onClick={ () => value.removeFromWishList(item.id) } ><i className="fa fa-trash"></i> Delete</button></td>
                                            </tr>
                                            )
                                        })     
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
</ProductConsumer>
	)
}

export default WishListOrZoom;
