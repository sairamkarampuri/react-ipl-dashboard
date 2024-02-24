// Write your code here
import './index.css'

const LatestMatchDetails = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first-section">
        <p className="latest-team-name">{competingTeam}</p>
        <p className="sub-headings">{date}</p>
        <p className="output-result-text">{venue}</p>
        <p className="output-result-text">{result}</p>
      </div>
      <div className="middle-section">
        <img
          className="latest-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <hr className="horizontal-line" />
      <div className="end-section">
        <p className="sub-headings">First Innings</p>
        <p className="output-result-text">{firstInnings}</p>
        <p className="sub-headings">Second Innings</p>
        <p className="output-result-text">{secondInnings}</p>
        <p className="sub-headings">Man of the Match</p>
        <p className="output-result-text">{manOfTheMatch}</p>
        <p className="sub-headings">Umpires</p>
        <p className="output-result-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatchDetails
