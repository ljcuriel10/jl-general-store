import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Container> 
      <Row className='mt-3'>
        <h2>June Lake, California</h2>
      </Row>
      <Row className='text-muted'>
        <h5>Welcome to the Loop!</h5>
      </Row>
      <Row>
        <p>Along the southernmost rim of the Mono Basin, California State Route 158 loops away from U.S. Highway 395 for 16 miles, then returns. It follows a horseshoe shaped canyon containing four lakes, surrounded by a dramatic mountainous backdrop. Within this canyon, among the lakes and streams, exists a modest yet full-serviced community, available to vacationers in all four seasons of the year. During Winter, June Mountain is California's family ski and snowboard resort, where kids under 12 ski and ride for free, offering terrain for all levels of alpine, telemark and snowboard enthusiasts. There are six chairlifts, full services including rentals, cafeteria, and the ski and snowboard school.  The local back-country is a haven for ski and snowboard mountaineers, climbers and ice climbers.  When the snow melts, there is even more to do! The loop is probably best known for its world-class trout fishing. There are also many hiking trails, and opportunities for varied activities including swimming, paddling, sailing and boating, bicycling, canoeing,rock climbing, art and photography, scenic drives or just plain relaxing in a tranquil mountain setting.  Our community offers full accommodations, camping and RV parks, stores and galleries, a local craft brewery, a spa and fitness center. and a number of eateries and other establishments</p>
      </Row>
    </Container>
  )
}

export default Home