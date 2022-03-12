import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap';
import NavBar from './components/NavBar'
import NearestRide from './components/NearestRide';
import PastRides from './components/PastRides';
import UpcomingRides from './components/UpcomingRides';
 
export default function Main() {
  const [key, setKey] = React.useState('nearestRide');
  return (
    <Container fluid className="p-0" style={{backgroundColor: "#292929", height: "100vh", width: "100vw"}}>
      <NavBar />
      <Container className="mt-2" fluid>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="nearestRide" title="Nearest Ride">
            <NearestRide />
          </Tab>
          <Tab eventKey="upcomingRides" title="Upcoming Rides(3)">
            <UpcomingRides />
          </Tab>
          <Tab eventKey="pastRides" title="Past Rides(2)">
            <PastRides />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}
