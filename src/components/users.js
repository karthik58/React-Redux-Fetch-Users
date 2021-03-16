import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getUsers } from '../store/actions/index'

import './users.css'

class users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props.users
    console.log('dddd', users)

    return (
      <div>
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <div className='cardslist'>
              <img src={u.avatar} />
              <h1>{u.first_name}</h1>
              <span>{u.email}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

const mapStateToPrps = (state) => ({
  users: state.users,
})

export default connect(mapStateToPrps, { getUsers })(users)
