import React from 'react'
import FlowersList from './FlowersList.js'
import "./Flowers.css"

const Flowers = () => {
    return(
    <div>
    <div className='flowers'>
    <div className="discoverSearch">
            <div className="form-inputSearch">
            <span className="iconSearch"><i className="fa fa-search"></i></span>
            <input
            placeholder="Looking for something specific?"
            />
            </div>
           </div> 
           </div>
    <FlowersList/>
    </div>
    );
}

export default Flowers;