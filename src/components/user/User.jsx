import React from 'react';
import styles from './user.module.scss';

const User = ({user:{login,avatar_url,html_url}}) => {
    return (
        <div className="col-3 mt-5">
            <div className="card">
                <div className="card-body text-center">
                    <img src={avatar_url} alt={login} className={styles.circleImage}/>
                    <h3 className="mt-2">{login}</h3>
                    <a href={html_url} className="btn btn-success">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default User
