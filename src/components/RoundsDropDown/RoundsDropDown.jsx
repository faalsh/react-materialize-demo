import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'


class RoundsDropDown extends React.Component {

    // componentWillReceiveProps(nextProps) {

    //     const {query, rounds, fetchRounds} = nextProps
        
    //     if(query.league && query.season && (rounds.league !== query.league || rounds.season !== query.season) ) {
    //         fetchRounds(query.league, query.season)
    //     }   
    // }
    // shouldComponentUpdate(nextProps, nextState) {
        
    //     return nextProps.rounds.fetched

    // }

    render() {


        const {rounds, league, season} = this.props
        // const items = rounds.rounds.map((round) => {
        //     return {name:round.name, to:{pathname: '/matches', query:{league: query.league, season:query.season, round:round.round_slug}}}
        // })

        return league && season ? <DropDown id="rounds" name="Rounds" items={rounds} />:null
    }
}

export default RoundsDropDown