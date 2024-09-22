import React from 'react';
import EventList from '../../events/event-list';
import EventDetailModal from '../../events/event-detail-modal';
import './style.css';

const Content = ({ selectedEventId, onEventSelect, onModalClose }) => {
  return (
    <div className="content">
      {/* EventList component to show the list of events */}
      <EventList onSelectEvent={onEventSelect} />

      {/* If an event is selected, display the modal */}
      {selectedEventId && (
        <EventDetailModal eventId={selectedEventId} onClose={onModalClose} />
      )}
    </div>
  );
};

export default Content;
