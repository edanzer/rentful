import { Container, Row, ListGroup, CloseButton, Button } from 'react-bootstrap'
// import { XIcon } from '@heroicons/react/solid';

interface Props {
  results: any; 
	removeLocation: any;
}

interface Location {
	id: number;
	location: string;
	averageHomeValue: number;
	averageRent: number|null;
	grossRentMultiplier: number|null;
}  

const Results = ({results, removeLocation}: Props ) => {
	return (
		<Container fluid className="results">
			<Row>
				{results.map( (item: Location) => (
          <ListGroup key={item.id} className="results-card">
            <ListGroup.Item className="location">
              <p>{item.location}</p>
              <Button size='sm' variant='outline-light' style={{ position: 'absolute', top: 12, right: 20 }}
                onClick={() => removeLocation(results, item.id)}
              >X</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <p><span className="label">Average Home Value:</span> {item.averageHomeValue}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p><span className="label">Average Rental Price:</span> {item.averageRent}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p><span className="label">Gross Rent Multiplier:</span> {item.grossRentMultiplier}</p>
            </ListGroup.Item>
          </ListGroup>
        ))}
			</Row>
		</Container>
	);
}

export default Results;