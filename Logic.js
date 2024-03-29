import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-map'} className="nav-link">
                  Liquid Maps Application
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-map'} className="nav-link">
                    Create new Map
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/map-list'} className="nav-link">
                    List Liquid Maps
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-map"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-map/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/map-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
