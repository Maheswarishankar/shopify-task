import React, { useState } from 'react'
import { Rating } from '@mui/material'

function Card({ prod, idx, count, setCount }) {

    const [show, setShow] = useState(false)
    function addtoCart() {
        setShow(!show)
        setCount(count + 1)
    }
    function removeCart() {
        setShow(!show)
        setCount(count - 1)
    }

    return (
        <div>
            <div key={idx} className="col mb-5">
                <div className="card h-100">
                    {/* <!-- Sale badge--> */}
                    {prod.salesEnabler ? <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> : null}
                    {/* <!-- Product image--> */}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{prod.productName}</h5>
                            {/* <!-- Product reviews--> */}
                            {prod.ratingEnabler ? <Rating name="half-rating" defaultValue={3} precision={1} /> : ""}<br />
                            {/* <!-- Product price--> */}
                            {prod.priceEnabler ? <span className="text-muted text-decoration-line-through">{prod.textMuted}</span> : ""}
                            {prod.price}<br />

                        </div>
                    </div>
  {/* .........................................Product Button action....................................  */}

                    {!show ? <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button className="btn btn-outline-dark mt-auto"
                                onClick={addtoCart}>Add to cart</button></div>
                    </div> : null}

                    {show ? <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button className="btn btn-outline-dark mt-auto"
                                onClick={removeCart}>Remove Cart</button></div>
                    </div> : null}

                </div>
            </div>

        </div>

    )
}

export default Card

