import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    //console.log(bottle)
    const {name,img,price}=bottle;
     
    return (
        <div className="bottle">
            <h3>Name:{name}</h3>
            <img src={img} alt="" />
            <h4>Price:${price}</h4>
            <button onClick={() =>handleAddToCart(bottle)}>Purchage</button>
        </div>
    );
};

export default Bottle;