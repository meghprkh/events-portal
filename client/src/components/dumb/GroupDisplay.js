import React from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'

var displayGroup = props => (
  <Grid>
    <Row>
      <Col md={10}>
        {props.groupList.map((el, key) => (
          <Panel header={el.name} bsStyle="success">
            {el.description}
          </Panel>
        ))}
      </Col>
    </Row>
  </Grid>
)


export default displayGroup
