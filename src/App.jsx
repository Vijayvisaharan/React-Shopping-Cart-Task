
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';
import Card from './card'
import CartItem from './CartItem';

function App() {
  let products = [
    {
      id: 1,
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$40.00 - $80.00',


    },
    {
      id: 2,
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$18.00',
      rating: 5



    },
    {
      id: 3,
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$25.00'


    },
    {
      id: 4,
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$40.00',
      rating: 5


    },
    {
      id: 5,
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '${25.00}'

    },
    {
      id: 6,
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$120.00 - $280.00'
    },

    {
      id: 7,
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$18.00',
      rating: 5


    },
    {
      id: 8,
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: '$40.00',
      rating: 5


    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  }
  let removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
  };
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-center">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle"  >
                  Dropdown

                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                  <li><a className="dropdown-item" href="#">All Products</a></li>
                  <li><a className="dropdown-item" href="#">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </li>
            </ul >

          </div >
          <span className="d-flex justify-content-between">

            <button className="btn btn-outline-dark" type="submit">
              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill me-1 mb-1" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              </i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
              {cart.length == 0 ? (
                <div></div>
              ) : (
                <>
                  <ol className="list-group list-group-numbered">
                    {cart.map((item, index) => {
                      return (
                        <CartItem
                          key={index}
                          item={item}
                          removeFromCart={removeFromCart}
                        />
                      );
                    })}
                  </ol>
                  <h1>Total : Rs.{total}</h1>
                </>
              )}
            </button>
          </span>
        </div >
      </nav >
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <Card key={index} product={product} addToCart={addToCart} cart={cart} />
            );
          }
          )}

        </div>
      </div>

    </>
  )
}

export default App
