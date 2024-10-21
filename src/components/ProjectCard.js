import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ title, category, image, description, link, linkText, onClick }) {
  return (
    <div className={`project-card ${category}`} onClick={onClick}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onClick: PropTypes.func, 
};

export default ProjectCard;
