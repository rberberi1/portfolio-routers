import React from 'react';
import PropTypes from 'prop-types';

function EventCard({ title, date, description, id, onDelete }) {
  return (
    <div className="event-item">
      <h3>{title}</h3>
      <p>{date}</p>    
      <p>{description}</p>
      <button className="deleteEventBtn" onClick={() => onDelete(id)}>Delete</button> 
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired, 
};

export default EventCard;
