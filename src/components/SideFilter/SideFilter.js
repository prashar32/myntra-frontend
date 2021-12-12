import React, {useState} from 'react'
import './SideFilter.css'
import {ProductConsumer} from "../../Context";

export default function SideFilter() {
    const [gen, setgen] = useState('');
    const [formal, setFormal] = useState(false);
    const [casual, setCasual] = useState(false);
    const [budget, setBudget] = useState(false);
    const [middle, setMiddle] = useState(false);
    const [high, setHigh] = useState(false);
    const [filterShow, setFilterShow] = useState(true);
    return (
        <div className="sideFilterList">
            <h6 className="filterHeading">FILTERS</h6>
            <div className="filterContainer">
            <ProductConsumer>
                {value => (
                <form>

                    {/* Gender Filter */}
                <div className="radioGroup">
                    <h6 style={{margin:'10px 0px'}}>GENDER</h6>
                    <div className="radioElement">
                        <input 
                        type="radio" id="men"
                        value="men" name="gen"
                        checked={gen==='men'} onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}}/>
                        <label className="radioLabel">Men</label>
                    </div> 
                    <div className="radioElement">
                        <input
                        type="radio" id="women"
                        value="women" name="gen"
                        checked={gen==='women'} onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}}/>
                        <label className="radioLabel">Women</label>
                    </div>
                    <div className="radioElement">
                        <input 
                        type="radio" id="boys"
                        value="boys" name="gen"
                        checked={gen==='boys'} onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}}/>
                        <label className="radioLabel">Boys</label>
                    </div>
                    <div className="radioElement">
                        <input 
                        type="radio" id="girls"
                        value="girls" name="gen"
                        checked={gen==='girls'} onChange={(e)=>{ setgen(e.target.value); value.filterByGen(e.target.value)}}/>
                        <label className="radioLabel">Girls</label>
                    </div>
                </div>

                {/* Occasion Filter */}
                <div className="radioGroup">
                    <h6 style={{margin:'10px 0px'}}>OCCASSION</h6>
                    <div className="radioElement">
                        <input 
                        type="checkbox" id="occassion"
                        name="occassion" value="formal" checked={formal}
                        onChange={(e)=>{setFormal(!formal); value.filterByOcc(e.target.value);}}
                        />
                        <label className="radioLabel">Formal</label>
                    </div> 
                    <div className="radioElement">
                    <input 
                        type="checkbox" id="occassion"
                        name="occassion" value="casual" checked={casual}
                        onChange={(e)=>{setCasual(!casual); value.filterByOcc(e.target.value);}}
                        />
                        <label className="radioLabel">Casual</label>
                    </div>
                    
                </div>

                {/* Price Filter */}
                <div className="radioGroup">
                    <h6 style={{margin:'10px 0px'}}>PRICE</h6>
                    <div className="radioElement">
                        <input 
                        type="checkbox" id="price"
                        name="category" value="budget" checked={budget}
                        onChange={(e)=>{setBudget(!budget); value.filterByPrice(e.target.value);}}
                        />
                        <label className="radioLabel">Rs.200 - Rs.600</label>
                    </div> 
                    <div className="radioElement">
                    <input 
                        type="checkbox" id="price"
                        name="category" value="middle" checked={middle}
                        onChange={(e)=>{setMiddle(!middle);value.filterByPrice(e.target.value);}}
                        />
                        <label className="radioLabel">Rs.600 - Rs.1300</label>
                    </div>
                    <div className="radioElement">
                    <input 
                        type="checkbox" id="price"
                        name="category" value="high" checked={high}
                        onChange={(e)=>{setHigh(!high); value.filterByPrice(e.target.value);}}
                        />
                        <label className="radioLabel">Rs.1300 - Rs.3000</label>
                    </div>
                    
                </div>
            </form>
            )}
            </ProductConsumer>
            </div>
            
        </div>
    )
}
