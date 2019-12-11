import React, { Component } from 'react'

class toggle extends Component {
    state = {
        on: false,

    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })

    }
    render() {
        return (
            <div>
                {this.state.on && this.props.children}
            </div>
        )
    }
}
export default toggle