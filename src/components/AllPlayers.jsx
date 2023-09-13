import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AllPlayers(){

    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
            async function fetchAllPlayers () {
                const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players')
                setAllPlayers(data.data.players);
                console.log(data.data.players);
            }
        fetchAllPlayers();    
    },[])

    return (
    <div>
        <h1>All Puppies</h1>
        {
            allPlayers.map((players) => {
                return(
                    <div key={players.id}>
                        <Link to={`/players/${players.id}`}>{players.name}</Link>
                    </div>
                )
            })
        }

    </div>
    )
}