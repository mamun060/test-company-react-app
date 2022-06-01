import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterResult from '../components/FilterResult'
import GameContent from '../components/GameContent'

const Home = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col md={3}>
                    <FilterResult />
                </Col>
                <Col md={9}>
                    <GameContent />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home