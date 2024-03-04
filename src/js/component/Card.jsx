import React from "react";
import PropTypes from "prop-types";

//create your first component
const Card = (props) => {
	return (
            <div className="card" style={{width:"20rem"}}>
                <img src={props.url} className="card-img-top"  />
            <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.body}</p>
                    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
            </div>
        );
}; 

Card.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Card;
