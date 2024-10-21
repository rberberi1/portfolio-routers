import React, { useState, useEffect } from "react";
import Search from "./Search";
import { events as initialEvents } from "./data";
import EventCard from "./EventCard";

function EventsList() {
  const [events, setEvents] = useState(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events'));
    return savedEvents || initialEvents;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events)); 
  }, [events]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.description) {
      const newEventWithId = {
        ...newEvent,
        id: events.length ? Math.max(...events.map(event => event.id)) + 1 : 1 
      };
      setEvents([...events, newEventWithId]);
      setNewEvent({ title: '', date: '', description: '' }); 
      setIsModalOpen(false); 
    } else {
      alert('Please fill in all fields');
    }
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="events">
      <h2>My Events</h2>
      
      <Search placeholder="Search Events..." onSearch={handleSearch} />

      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            id={event.id}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No events found.</p>
      )}

      <button id='add-event-btn' onClick={() => setIsModalOpen(true)}>Add New Event</button>

      {isModalOpen && (
        <div className="event-modal">
          <div className="event-modal-content">
            <h3>Add New Event</h3>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Event Description"
              rows={5}
              value={newEvent.description}
              onChange={handleInputChange}
            />
            <button id='save-event-btn' onClick={handleAddEvent}>Save Event</button>
            <button id='cancel-event-btn' onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsList;
