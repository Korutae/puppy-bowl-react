import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to='/'>All Puppies</Link>
            <Link to='/NewPlayerForm'>New Puppy Form</Link>

        </div>
    )    
}
