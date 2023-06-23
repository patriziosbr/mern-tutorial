import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample({event}) {
  return (
    <Card className='mb-3'>
      <Card.Header style={{ textTransform: "capitalize"}}><b>{event.title}</b></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {event.bodyEvent ? (event.bodyEvent) : ("") }
            {' '}
          </p>
          <footer className="blockquote-footer">
            Starts at {event.startAt} at {event.hourStart}
          </footer>
          <footer className="blockquote-footer">
            Starts at {event.endAt} at {event.hourEnd}
          </footer>
          {event.emailSent ? (<footer className="blockquote-footer">Sent: { event.emailReciever + ' ✔' }</footer>) :(<footer className="blockquote-footer">Sent: { event.emailReciever + ' ✘' }</footer>) }
          <footer className="blockquote-footer">
            Created at {event.createdAt}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;