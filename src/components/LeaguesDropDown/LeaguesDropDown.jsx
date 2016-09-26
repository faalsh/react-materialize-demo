import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'
import firebase from 'firebase'

class LeaguesDropDown extends React.Component {


    render() {
        const {leagues, selectedName} = this.props
        return <DropDown id="leagues" name="Leagues" items={leagues} selectedName={selectedName}/>;
    }
}

export default LeaguesDropDown