import React from 'react'

export default class extends React.Component {

	render() {
    return (
      <div className="col s12 m8 l8">
        <div>{this.props.params.repoName}</div>
      </div>
    )
  }

}