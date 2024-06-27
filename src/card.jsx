
function Card({ product,addToCart}) {
    return (
        <>

            <div className="col-sm-3 ">
                <div className="card mt-5" style={{ width: "16rem" }}>
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div className="card-body text-center ms-2">
                        <h5 className="card-title"><b>{product.name}</b></h5>
                        
                        <p className="card-text">Rs.{product.price}</p>
                       
                        <span className="d-flex justify-content-center">
                            <button onClick={()=>addToCart(product)} className="btn btn-outline-dark" type="submit">
                                Add to cart
                            </button>  </span>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card
