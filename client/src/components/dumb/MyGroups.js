import React from 'react'
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap'

var myGroups = props => (
  <Grid>
    {props.groupList.map((el, key) => (
      <div key={key}>
        {el.isMember && (
          <Row>
            <Col md={10}>
              <Panel header={el.name} bsStyle="success">
                {el.description}
                <Button style={{float: 'right'}} bsStyle="danger">
                  Unsubscribe
                </Button>
              </Panel>
            </Col>
          </Row>
        )}
      </div>
    ))}
  </Grid>
)


export default myGroups
