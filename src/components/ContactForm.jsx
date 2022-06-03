import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../src/assets/css/components/ContactForm.module.css';

const ContactForm = () => {
  return (
      <Container>
        <Row>
          <Col>
          <div>
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque animi ratione nisi consectetur eius numquam. 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Hic accusantium, consequuntur possimus ex illo modi.
            </p>
          </div>
          </Col>
        </Row>
        <Row className={styles.ContactFormWrap}>
          <Col md={6}>
            <div className={styles.ContactInputFeild}>
              <label>Name</label> <br />
              <input type="text" />
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.ContactInputFeild}>
              <label>Email</label> <br />
              <input type="text" />
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.MessageAreaWrap}>
              <label htmlFor="">Messages</label> <br />
              <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.ContactFormBtn}>
                <button>Sent</button>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default ContactForm