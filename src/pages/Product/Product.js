import React from 'react'
import './Product.css'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import SideFilter from '../../components/SideFilter/SideFilter'
import {ProductList} from '../../components/ProductList/ProductList'

export default function Product() {
        const data = {
            title : 'Shirts For Men & Women',
            itemTitle: 'Shirts For Men & Women -',
            countItem : '20 items'
        }
        return (
            <React.Fragment>
                <div className="rowProduct">
                    <div className="breadCrumb">
                        <Breadcrumbs data = {data} />
                    </div>
                    <div className="productWindow">
                        <div className="sideFilter">
                            <SideFilter/>
                        </div>
                        <div className="productList">
                            <ProductList/>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        );
}
