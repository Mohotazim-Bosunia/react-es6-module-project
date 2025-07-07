import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
const Bottles = () => {

        
        const [bottles,SetBottles]=useState([]);
        const [cart,setCart]=useState([])

        useEffect( () => {
            fetch('Bottles.json')
            .then(res=>res.json())
            .then(data => SetBottles(data))

        } , [])

         //console.log(bottles)
        // console.log(typeof bottles)
        
       const handleAddToCart = bottle =>{
            const newCart=[...cart,bottle]
            setCart(newCart)
            //console.log(newCart)
            
        }

    return (
        <div>
           <h2>Wonderful Bottles:{bottles.length}</h2>
           <h3>Cart:{cart.length}</h3>
           <div className="bottle-container">
                    {
            bottles.map(x => <Bottle
                key={x.id}
                bottle={x}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
        }
           </div>

        </div>


    );
};

export default Bottles;