import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'

class LeaguesDropDown extends React.Component {
    render() {
        const {selectedName} = this.props


        const items = this.props.leagues.leagues.map((league) => {
             return {name:league.name, to:{pathname: '/matches', query: {league: league.league_slug} }}
         })

        return <DropDown id="leagues" name="Leagues" items={items} selectedName={selectedName}/>;
    }
}

export default LeaguesDropDown