import React from 'react'
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap'

var displayGroup = props => (
  <Grid>
    <Row>
      <Col md={10}>
        {props.groupList.map((el, key) => (
          <Panel header={el.name} bsStyle="success">
            {el.description}
            {props.isUser && (
              el.subscribed  ?
              <Button bsStyle="primary" bsSize="large" style={{float: 'right'}}
                 onClick={() => props.toggleState(el.id, 'unsubscribe')}>
                Subscibe
              </Button> :
              <Button bsStyle="danger" bsSize="large" style={{float: 'right'}}
                 onClick={() => props.toggleState(el.id, 'subscribe')}>
                Unsubscribe
              </Button>
            )}
          </Panel>
        ))}
      </Col>
    </Row>
  </Grid>
)


export default displayGroup
