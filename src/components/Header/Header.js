import React, {useState} from 'react'
import MyntraLogo from '../../assets/img/logo-myntra.png'
import './Header.css'

import Cart from '../Cart'
import WishList from '../WishListOrZoom'
import {ProductConsumer} from '../../Context';
import { Route } from 'react-router'
import { Link, useHistory } from 'react-router-dom'


export const Header = () => {
    // Modal is to show or hide
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    // Toggle for modal of wishlist and cart
    const changeIsOpen = () => {setIsOpen(!isOpen)}

    const [searchContainer, setSearchContainer] = useState('');

    return (
        <div className="header">
            <Cart/>
            <WishList/>
        <ProductConsumer>
        { (value) => (
            <> 
            <img src={MyntraLogo} alt="logo" className="logo" />
            
            <nav className="navigation-header">
                <a href="/#">MEN</a>
                <a href="/#">WOMEN</a>
                <a href="/#">KIDS</a>
                <a href="/#">HOME AND LIVING</a>
                <a href="/#">OFFERS</a>
            </nav>

            {/* Search Bar */}
            <div className="sb">
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="Search for products, brands and more."
                    onChange={ (e)=>{
                        value.handleSearch(e.target.value); }}  />
                </div>
            </div>

            {/* Profile Icons, WishList, Cart */}
            <div className="profileGroup">
                <div className="profile">
                    <i className="fa fa-user"></i>
                    <p>Profile</p>
                </div>
                <div className="wishlist" onClick={()=>{value.modalOpens("Wishlist")}}>
                    <i className="fa fa-bookmark" ></i>
                    <span className="sideValue">
                    {value.wishlist.length}
                    </span>
                        <p style={{fontSize:'14px'}}>
                            Wishlist
                        </p>
                </div>
                <div className="cart" onClick={()=>{value.modalOpens("Bag")}}>
                        <div className="cartIcon">
                            <i className="fa fa-shopping-bag"></i>
                          <span className="sideValue">{value.bag.length}</span>
                        </div>
                            
                          <p style={{fontSize:'14px'}}>Bag</p>
                </div>

            </div>
            </>
            )}</ProductConsumer>
        </div>
    )
}
