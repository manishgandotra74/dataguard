import React from "react"
import './card.css'
import { Card, Form, Col, Row } from 'react-bootstrap'
export default function PluginCard(props) {
  const [status, setStatus] = React.useState(true)
  function onStatusChange() {
    setStatus(!status)
    props.cardCallback(!status, props.data)
  }
  React.useEffect(() => {
    setStatus(props.data.status === 'active')
  }, [props.data.status, props.status])
  return <>


    <Card className="card">
      <Card.Body>
        <Row>
          <Col sm={9}>
            <Card.Title >{props.data.title}</Card.Title>
            <Card.Text >
              {props.data.description}
            </Card.Text>
          </Col>
          <Col sm={3}>
            <Form.Check
              onChange={() => onStatusChange()}
              type="switch"
              disabled={props.status === false ? true : props.data.status === 'disabled'}
              isValid={status}
              checked={status}
              id="custom-switch"
            />
            <p className="qcont">{props.data.status}</p>

          </Col>
        </Row>

      </Card.Body>
    </Card>
  </>
}