import React from 'react'
import { Row, Col, Badge } from 'react-bootstrap';
import moment from 'moment';
import map from '../map.png'

export default function PastRides() {
  const results =  [
    {
      id: 1,
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: 2,
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
  ];
  return (
    <Row className="d-flex justify-content-center">
    {results.map(ride => (
      <Col className='col-lg-12 col-md-12 col-sm-12 mb-2 rounded' style={{width: "90%", backgroundColor: "#171717", color:"white"}}>
        <div className="d-flex justify-content-start p-3">
          <div className='pe-3'>
            <img className="rounded" style={{height: "8rem", width: "12rem"}} src={map} alt={"map"} />
          </div>
          <div className="d-flex justify-content-between" style={{width: "100%"}}>
            <div>
              <div>Ride id: {ride.id}</div>
              <div>Origin Station: {ride.origin_station_code}</div>
              <div>Station Path: [13, 25, 41, 48, 59, 64, 75, 81, 91] </div>
              <div>Date: {moment(ride.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div>Distance: {ride.destination_station_code}</div>
            </div>
            <div className="d-flex">
              <div className='me-3'><Badge pill bg="dark">{ride.city}</Badge></div>
              <div className='me-3'><Badge pill bg="dark">{ride.state}</Badge></div>
            </div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
  )
}
