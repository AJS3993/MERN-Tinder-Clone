import { SwipeableDrawer } from '@material-ui/core';
import React, { useState} from 'react'
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
    
    const [people, setPeople] = useState([
        {
            name: 'Elon',
            url: "https://compote.slate.com/images/d30a3bea-f2dc-4b95-b889-16c575ff568c.jpeg?width=780&height=520&rect=5113x3409&offset=0x0"
        },
        {
            name: 'Jeff',
            url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        }
    ]);

    const swiped = (nameToDelete) => {
        console.log("removing" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <div className='tinderCards'>
            <div className='cardContainer'>
                {people.map((person) => (
                <TinderCard
                className="swipe"
                key={CharacterData.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>

                </TinderCard>
                 ))}
            </div>
        </div>
    )
}

export default TinderCards
