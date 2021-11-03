import React, { useState} from 'react'
import './TinderCards.css'

function TinderCards() {
    
    const [people, setPeople] = useState([
        {
            name: 'Elon',
            url: "https://compote.slate.com/images/d30a3bea-f2dc-4b95-b889-16c575ff568c.jpeg?width=780&height=520&rect=5113x3409&offset=0x0"
        }
    ]);

    return (
        <div className='tinderCards'>
            
{people.map((person) => (
    <h1>{person.name}</h1>
))}

        </div>
    )
}

export default TinderCards
