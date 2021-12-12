import React from "react";
import {ProductConsumer} from "../Context";
import "../App.css";

const Cart =  () => {
		return (
        <ProductConsumer>
            {(value) => {
                return <div className="modal_container"  style={!value.bagModalOpen?{display:'none'}:{display:'block'}}>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-12 col-sm-12 col-md-8 p-5 col-lg-8 mx-auto text-center text-capitalize" style={{fontSize:'12px', overflow:'auto'}}>
                            <i className="fa fa-close fa-2x pull-right" style={{cursor:'pointer'}} onClick={()=>{value.modalClose("Bag")}}></i>
                            <h5 className="text-center pb-3">Bag</h5>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Info</th>
                                        <th>Price</th>
                                        <th>Count</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { value.bag.length === 0 ? (<tr><td colSpan="6">No Item Added</td></tr>) : value.bag.map(item => {
                                        return (
                                            <tr key = {item.id}>
                                                <td><img src={item.img} alt="Cart" className="img-fluid" width="20px" height="20px" /></td>
                                                <td>{item.title}</td>
                                                <td>{item.info}</td>
                                                <td>{item.price}</td>
                                                <td>{item.count}</td>
                                                <td><button className='btn btn-sm btn-danger' onClick={ () => value.removeFromBag(item.id) } ><i className="fa fa-trash"></i> Delete</button></td>
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

export default Cart;
