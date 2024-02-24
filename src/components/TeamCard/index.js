// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="team-list-item">
        <img className="list-item-team-logo" src={teamImageUrl} alt={name} />
        <p className="list-item-team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
