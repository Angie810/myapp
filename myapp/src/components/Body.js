import React from 'react'
import computerImage from '../leisure.jpg';
import '../body.css'


function Body(){
    return(
        
        <div className="body">
            
            <img src={computerImage} className="image" alt="logo" />
            <h2>A few facts about myself</h2>
            <p>I am originally from Liuzhou,China, which is a small town that has 9 million people 
                (I know, the whole Sweden only has 9 million folk but hey, that's why I'm immigrating here right? To help the overpopulation situation in China.)
My favorite food is Chinese food, street food, noodles, sometimes Pizzas and burgers for a change. 
My hobby is to travel and meet new people and I like hanging out with friends at the weekend, spending time with my family. 
</p>
        </div>
    )
}
export default Body;