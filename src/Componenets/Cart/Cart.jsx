import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
           <h3>Cart:{cart.length}</h3>
           <div >
            {
                cart.map(bottle => <img src={bottle.img} className='cart-container'></img>)
            }
            </div> 
        </div>
    );
};

export default Cart;