import React from 'react'
import '../css/Aside.css'

function Aside() {
    return (
        <div id='aside' className='mb-sm-5 p-3 bg-light' style={{ height: "100%" }}>
            <h4 className='h4 mb-1'>Sizes</h4>
            <hr />
            <div className='sizesSection'>
                <span className='badge w-25 fs-5'>XS</span>
                <span className='badge w-25 fs-5'>S</span>
                <span className='badge w-25 fs-5'>M</span>
                <span className='badge w-25 fs-5'>L</span>
                <span className='badge w-25 fs-5'>XL</span>
                <span className='badge w-25 fs-5'>2XL</span>
            </div>

            <h4 className='h4 mt-5 mb-1'>Colors</h4>
            <hr />
            <div className='colorsSection'>
                <span className='badge w-25 fs-5 text-dark' style={{ backgroundColor: "white" }}>.</span>
                <span className='badge w-25 fs-5' style={{ backgroundColor: "black" }}>.</span>
                <span className='badge w-25 fs-5' style={{ backgroundColor: "brown" }}>.</span>
                <span className='badge w-25 fs-5' style={{ backgroundColor: "grey" }}>.</span>
            </div>

            <h4 className='h4 mt-5 mb-1'>Price</h4>
            <hr />
            <div className='priceSection'>
                <div className='form-input-control w-100'>
                    <label htmlFor="minPrice" className='text-muted pe-2'>Min ($)</label>
                    <input type="text" name="minPrice" id="minPrice" className='p-2 fw-bold w-100' />
                </div>
                <div className='form-input-control w-100 my-2'>
                    <label htmlFor="maxPrice" className='text-muted pe-2'>Max ($)</label>
                    <input type="text" name="maxPrice" id="maxPrice" className='p-2 fw-bold w-100' />
                </div>
            </div>

            <button className='btn btn-secondary w-100 mt-5'>GET PRODUCTS</button>

        </div>

    )
}

export default Aside