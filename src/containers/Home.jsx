import { useState } from 'react'
import { Container, Row, Col, Button, Input } from 'reactstrap'

export const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleButtonClick = () => {
    setOutputText('Button Clicked!')
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setOutputText(`Input Changed: ${e.target.value}`)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the Home Page</h1>
          <p>Click the button to interact:</p>
          <Button className="mb-2" color="primary" onClick={handleButtonClick}>
            Click Me
          </Button>
          <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
          <div>{outputText}</div>
        </Col>
      </Row>
    </Container>
  )
}
