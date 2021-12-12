import React, {useState} from 'react'
import './TopFilter.css'
// import { Dropdown } from 'react-bootstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {ProductConsumer} from "../../Context";

export default function TopFilter() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [bundle, setBundle] = useState(false);
    const [coorigin, setCoorigin] = useState(false);
    const [size, setSize] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <div >
        <ProductConsumer>
            {
                value => (
                <form>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{outline:'none'}}>
                        <DropdownToggle caret className="bg-white text-dark" style={{fontSize:'14px'}}>
                        Sort by : <span className="font-weight-bold">Recommended</span>
                        </DropdownToggle>
                        <DropdownMenu style={{fontSize:'14px', zIndex:'1000'}}>
                            <DropdownItem onClick={()=>{value.applySort('desc')}}>Price: High To Low</DropdownItem>
                            <DropdownItem onClick={()=>{value.applySort('asc')}}>Price: Low To High</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </form>
                )
            }
        </ProductConsumer>
        </div>
    )
}
