import React from 'react';

function User(props) {
  console.log("props", props)
 
  return (
    <div className="card-list">
       <img src={props.user.avatar_url} alt={props.user.name} />
        <div>    
          <h1>{props.user.name}</h1>
          <h3>{props.user.login}</h3>
        </div>
     </div>
  );
}

export default User;