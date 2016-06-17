import React from 'react'
import { Form, FormGroup, Col, FormControl } from 'react-bootstrap'
import { ControlLabel, Checkbox, Button, Tabs, Tab } from 'react-bootstrap'

var LoginForm = props => (
  <Form horizontal onSubmit={props.onSubmit}>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl name='email' type="email" placeholder="Email" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl name='password' type="password" placeholder="Password" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

const formInstance = props => (
  <div className='small-container container'>
    <Tabs activeKey={props.tab} onSelect={props.onTabChange} justified>
      <Tab eventKey={1} title='User'></Tab>
      <Tab eventKey={2} title='Group'></Tab>
    </Tabs>
    <br />
    <LoginForm onSubmit={props.onSubmit}/>
  </div>
);

export default formInstance;
