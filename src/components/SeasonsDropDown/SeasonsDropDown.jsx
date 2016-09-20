import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'


class SeasonsDropDown extends React.Component {

    componentWillReceiveProps(nextProps) {    
        const {fetchSeasons,query, seasons} = nextProps

        if(query.league && seasons.league !== query.league) {
            fetchSeasons(query.league)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.seasons.fetched 
       
    }

    render() {
        const { seasons, query} = this.props
        const items = seasons.seasons.map((season) => {
             return {name:season.name, to:{pathname: '/matches', query: {league: query.league,season: season.season_slug} }}
         })

        return query.league ? <DropDown id="seasons" name="Seasons" items={items} selectedName={query.season}/>: null;
    }
}

export default SeasonsDropDown