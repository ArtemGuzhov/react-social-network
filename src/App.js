import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { useRoutes } from './routes'
import { Container, Row, Col } from 'react-bootstrap'

function App(props) {
  const routes = useRoutes(props)

  return (
    <>
      <BrowserRouter>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <NavBar />
            </Col>
            <Col xs={10}>{routes}</Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
