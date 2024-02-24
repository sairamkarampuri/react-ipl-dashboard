// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchesDetails

  const winOrLossClassName = matchStatus === 'Won' ? 'color-green' : 'color-red'

  return (
    <li className="match-card-container">
      <img
        className="match-card-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-team-result">{result}</p>
      <p className={`match-card-team-status ${winOrLossClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
