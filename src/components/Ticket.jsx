import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx global> {`
          hr {
            border-color: red;
            border: 20px dotted cornflowerblue;
            border-radius: 25%;
            shape-padding: 500px;
            padding: 50px;

          }
            `}</style>
      <h3>{props.location} - {props.names}</h3>
      <li className='styled'><em>{props.issue}</em></li>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
