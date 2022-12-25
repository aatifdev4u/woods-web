import React from 'react'
import { Row, Col, Card,  } from 'react-bootstrap';
/**
* @author
* @function 
**/

export const Team = (props) => {
  return(
    <div className="team-wrapper">
        <div>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Principle: Mr Zeeshanul Haque</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Qualification:</Card.Subtitle>
                    <Card.Text>
                       B.Tech in Electronics and Telecommunication, B.ED
                    </Card.Text>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Vice Principle:  Mr Farhan Akhtar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Qualification:</Card.Subtitle>
                    <Card.Text>
                      B.sc Hons in Physics, B.ED
                    </Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <h2>Teachers</h2>
          <div className="teacher-list">
            <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="teacher-list-item">
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./../images/building.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
          </div>
        </div>
    </div>
   )

 }