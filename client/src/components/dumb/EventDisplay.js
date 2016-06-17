import React from 'react'
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap'

var displayEvent = props => (
  <Grid>
    <Row>
      <Col md={10}>
        {props.eventList.map((el, key) => (
          <Panel header={el.name} bsStyle="Success">
            {el.description}
            {props.isUser && (
              el.going  ?
              <Button bsStyle="primary" bsSize="large" style={{float: 'right'}}
                 onClick={() => props.toggleState(el.id, 'notgoing')}>
                Going
              </Button> :
              <Button bsStyle="danger" bsSize="large" style={{float: 'right'}}
                 onClick={() => props.toggleState(el.id, 'going')}>
                Not Going
              </Button>
            )}
            <br />
            - <i>{el.date}</i>
          </Panel>
        ))}
      </Col>
    </Row>
  </Grid>
)


export default displayEvent
