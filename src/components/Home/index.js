// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // const {teams} = data
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  // Render Team list
  renderTeamList = () => {
    const {teamsList} = this.state

    return (
      <ul className="teams-list-container">
        {teamsList.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  // Render loading // Removed testid="loader" from div for publishing
  renderLoading = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container-loading">
        <div className="home-container">
          <div className="title-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="main-ipl-title">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoading() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
