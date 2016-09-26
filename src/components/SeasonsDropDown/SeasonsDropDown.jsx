import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'


class SeasonsDropDown extends React.Component {


    render() {
        const { seasons, league} = this.props
        return league ? <DropDown id="seasons" name="Seasons" items={seasons} />: null;
    }
}

export default SeasonsDropDown