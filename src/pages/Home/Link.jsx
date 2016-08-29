import React from 'react';

class  Link extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return <link {...this.props} />;
    }
}

export default Link;
