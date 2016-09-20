import React from 'react'


class MatchesTable extends React.Component {

    componentWillReceiveProps(nextProps) {

        const {query, matches, fetchMatches} = nextProps
        
        if(query.league && query.season && query.round && (matches.league !== query.league || matches.season !== query.season || matches.round !== query.round)) {
            fetchMatches(query.league, query.season, query.round)
        }   
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        return nextProps.matches.fetched
    }

    render() {
        const {matches, query} = this.props
        const rows = matches.matches.map((match) => {


            return (
                <div key={match.identifier} style={{padding:"10px", textAlign: "center", display:"table-row", margin:"5px", height:"30px"}} className="card grey lighten-3
">
                    <div style={{paddingRight: 5, fontWeight: "bold", display:"table-cell", textAlign: "right", verticalAlign: "middle", paddingRight: "15px"}}>{match.home.team}</div> 
                    <div className="blue white-text" style={{display:"table-cell"}}>{match.home.goals >= 0 ? match.home.goals:'-'}</div> 
                    <div className="blue white-text" style={{display:"table-cell"}}>:</div> 
                    <div className="blue white-text"  style={{display:"table-cell"}}>{match.away.goals >=0 ? match.away.goals:'-'}</div> 
                    <div style={{paddingLeft: 5, fontWeight: "bold", display:"table-cell", textAlign:"left", verticalAlign: "middle", paddingLeft: "15px"}}>{match.away.team}</div>
                </div>
            )
        })

        return query.league && query.season && query.round ? <div style={{marginTop:"50px", display:"table", width: "100%"}}>{rows}</div>:null
    }
}

export default MatchesTable