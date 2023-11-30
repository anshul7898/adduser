import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CancelTicket = () => {
  return(
  <div className="text-center">
    <h1>Your Ticket has been canceled</h1>
    <br />
    <Button variant="outline-warning">
    <Link to="/">Go to Home page</Link>
    </Button>
  </div>
  );
};

export default CancelTicket;
