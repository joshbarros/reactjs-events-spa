import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_EVENT_BY_ID } from '../../../queries/events/get-event-by-id.js';

import './style.css';

import { formatDate } from '../../../utils/format-date.js';

const EventDetailModal = ({ eventId, onClose }) => {
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: eventId },
  });

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error loading event: {error.message}</p>;

  const event = data.onlineEvent;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{event.title}</h2>
        <p>
          Date:{' '}
          {event.onlineEventDate ? formatDate(event.onlineEventDate) : 'TBA'}
        </p>
        <div>
          <strong>Description:</strong>
          <div className="description-box">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  event.onlineEventDescription || 'No description available',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
