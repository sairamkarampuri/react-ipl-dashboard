// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerLogo: '',
    latestMatchDetails: {},
    recentMatchesDetails: [],
    backgroundColorImage: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getDetailsAboutTeam()
  }

  getDetailsAboutTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const updatedBGColorName = id
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const updatedTeamBannerUrl = teamBannerUrl

    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatchesDetails = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerLogo: updatedTeamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatchesDetails: updatedRecentMatchesDetails,
      backgroundColorImage: updatedBGColorName,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerLogo,
      latestMatchDetails,
      recentMatchesDetails,
      backgroundColorImage,
      isLoading,
    } = this.state

    return (
      <div className={`team-matches-container ${backgroundColorImage}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              className="team-banner-logo"
              src={teamBannerLogo}
              alt="team banner"
            />
            <h1 className="latest-matches-text">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-match-cards-container">
              {recentMatchesDetails.map(eachItem => (
                <MatchCard recentMatchesDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
