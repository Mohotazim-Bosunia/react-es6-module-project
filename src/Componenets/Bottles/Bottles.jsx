import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/Localstorage";
const Bottles = () => {

        
        const [bottles,SetBottles]=useState([]);
        const [cart,setCart]=useState([])

        useEffect( () => {
            fetch('Bottles.json')
            .then(res=>res.json())
            .then(data => SetBottles(data))

        } , [])

        useEffect(() =>{
            console.log('called the useEffect',bottles.length)
            if(bottles.length>0){
                const storedCart=getStoredCart();
            console.log(storedCart,bottles);
            
            const saveCart=[];
            for(const id of storedCart){
                console.log(id)
                const bottle=bottles.find(bottle =>bottle.id===id);
            if(bottle){
                saveCart.push(bottle);

            }
            console.log('save cart:',saveCart)
            setCart(saveCart);
            }
            }
           
        },[bottles])

         //console.log(bottles)
        // console.log(typeof bottles)
        
       const handleAddToCart = bottle =>{
            const newCart=[...cart,bottle]
            setCart(newCart)
            //console.log(newCart)
            addToLS(bottle.id)
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