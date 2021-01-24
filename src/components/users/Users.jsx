import React from 'react'
import User from '../user/User'

const Users = ({users}) => {
    return (

        <div className="container">
            <div className="row">
                {users && users.map(user => <User key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Users
