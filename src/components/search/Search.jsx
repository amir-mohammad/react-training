import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Search = ({searchUsers}) => {
    const [search,setSearch] = useState("");
    const onChangeHandler = (e) => {
          setSearch(e.target.value);  
    }

    const clickHanlder = () => {
        searchUsers(search);
    }
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">Search User</div>
                <div className="card-body">
                    <input type="text" name="search" id="search" placeholder="search users" className="form-control"
                        value={search}
                        onChange={onChangeHandler}
                    />
                    <button className="btn btn-success btn-block mt-2" onClick={clickHanlder}>Search</button>
                </div>
            </div>
        </div>
    )
}
Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
}
export default Search
 