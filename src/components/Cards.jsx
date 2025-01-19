import React from 'react'
import { clothes } from '../data/Data'


console.log(clothes)

function Cards({ clothes }) {
    const { id, image, name, price, discount, discountedPrice, sizes } = clothes;

    return (
        <div className="col-sm-12 col-md-4">
            <div className='card bg-light m-2'>
                <div style={{ height: "max-content" }}>
                    <img src={image} alt={name} className='card-img-top' style={{ objectFit: "fill" }} />
                </div>
                <div className="card-body">
                    <div className="card-title fw-bold text-center text-uppercase">{name}</div>
                    <hr />
                    <div className="card-text fs-1 text-center" style={{ color: "brown" }}>{discount ? discountedPrice : price}$</div>
                    <div className="sizes bg-white p-1 text-center mt-2 mb-3 rounded">
                        {sizes.map((size, index) => (
                            <span key={index} className="badge bg-white text-dark me-1">
                                {size}
                            </span>))}
                    </div>
                    <div className="getProduct">
                        <button className='btn btn-xl btn-outline-dark w-100 text-center'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards