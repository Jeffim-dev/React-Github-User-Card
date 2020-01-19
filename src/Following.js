import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function Following(props) {
  console.log("Following props", props)
 
  return (
    <div className="card-list">
      {props.following.map(ff => (
        <div>
          <img src={ff.avatar_url} alt={ff.name} />
          <div>
            <h1>{ff.login}</h1>
            <h3><a href = {ff.html_url}>{ff.url}</a></h3>
          </div>
        </div>
       ))}  
    </div>
  );
}

export default Following;