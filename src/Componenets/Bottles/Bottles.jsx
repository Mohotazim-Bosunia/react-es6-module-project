import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

        
        const [bottles,SetBottles]=useState([]);

        useEffect( () => {
            fetch('Bottles.json')
            .then(res=>res.json())
            .then(data => SetBottles(data))

        } , [])
        
        

    return (
        <div>
           <h2>Wonderful Bottles:{bottles.length}</h2>
           <div>
                    {
            bottles.map(x => <Bottle
                bottle={x}
                
                ></Bottle>)
        }
           </div>

        </div>


    );
};

export default Bottles;