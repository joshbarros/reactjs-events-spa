import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../../../queries/events/get-events.js';
import './style.css';

import { formatDate } from '../../../utils/format-date.js';

const EventList = ({ onSelectEvent }) => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <div className="event-list">
        {data.onlineEvents.nodes.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => onSelectEvent(event.id)}
          >
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong>{' '}
              {event.onlineEventDate
                ? formatDate(event.onlineEventDate)
                : 'TBA'}
            </p>
            <p>
              <strong>Description:</strong>
              <br />
              <div className="description-box">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      event.onlineEventDescription ||
                      'No description available',
                  }}
                />
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
