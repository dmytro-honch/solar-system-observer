import { Link } from 'react-router-dom'
import { PLANET_OBSERVER_PATH } from '../Router/pathes.ts';


const SolarSystem = () => {
    return (
        <ul>
        <li>
          <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
        </li>
      </ul>  
    )
}

export default SolarSystem