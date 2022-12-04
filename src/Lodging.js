import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'

const Lodging = () => {
  return (
    <div>
        <Container className='m-5'>
            <Row>
                <h2>Where to Stay in June Lake</h2>
            </Row>
            <Row>
            <Col>
                <Card border='light' className='mt-5 me-5' >
                    <Card.Img className='rounded'  style={{ height: '500px'}} variant='top' src='https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80' />
                    <Card.Body>
                        <Card.Title>Camping & RV</Card.Title>
                        <Card.Text>
                            Whether you sleep under the stars, in a humble tent or a luxury RV, get a great campsite in the Loop.
                        </Card.Text>
                        <Button className='text-uppercase' variant='primary'>Find Camping</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border='light' className='mt-5'>
                    <Card.Img className='rounded' style={{ height: '500px'}} variant='top' src='https://images.unsplash.com/photo-1635889219076-c52df62d5065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                    <Card.Body>
                        <Card.Title>Lodging & Vacation Rentals</Card.Title>
                        <Card.Text>
                            Choose your accommodations according to your style and taste, from a wide variety of options
                        </Card.Text>
                        <Button className='text-uppercase' variant='primary'>Find Lodging</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            <h2 className='my-5'>Places to Stay</h2>
            <p>People have been coming to stay and enjoy the June Lake Loop for centuries.  The first visitors were the Native American Kuzadika and Miwok who used the Mono Pass as a trade route between the Mono country and Yosemite Valley.  Migrants discovered the Loop during California's mining days when thriving communities were established in the Mono Basin and the nearby Bodie Hills. The first established camp in the Loop was founded by Roy Carson, who was one of the workers at the newly constructed hydroelectric power project near Silver Lake, in 1915.  Trout fishing, hunting and sightseeing lured visitors into this strikingly beautiful canyon.  With the establishment of the Tioga Pass Road during the Roaring 20's, June Lake began to grow, as a favorite stop for motorists when touring the Sierra.  By the 1930's many lodging establishments were founded, and skiing was established as a winter pastime, making June Lake the Eastern Sierra's Original Resort Community.  Today, the Loop offers a variety of accommodation styles including Camping and RV Parks, traditional Rustic Cabins, Motel and Hotel Rooms, Condominiums, Apartments, Private Vacation Rentals and Luxury Homes. </p>
        </Container>
    </div>
  )
}

export default Lodging