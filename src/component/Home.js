import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHandHoldingUsd as money,faUser,faPhone} from '@fortawesome/free-solid-svg-icons'
import { Container,Row,Col } from 'react-bootstrap';



function Home() {
    return (
        <div>
          <Container>
              <Row>
                  <Col xs={6}>
                   <Row>
                       <Col xs={6}>
                          <div className="logo">
                            <div className='squere'>

                            </div>
                              <div className="title">
                               FERRUM
                              </div>
                              <div className="desc">
                                  CAPITAL
                              </div>
                          </div>
                       </Col>
                       <Col xs={6}>
                        <form className='check'>
                            <div className='custom-radio'>
                                <div className='personal'>
                                    <input type='radio'  id='check' name='check-custom' checked/>
                                    <span className='selected'>Fərdi</span>

                                </div>

                                <div className='business'>
                                    <input type='radio' id='check' name='check-custom'/>
                                    <span className='noselected'>Biznes</span>
                                </div>
                            </div>
                        </form>
                       </Col>
                   </Row>
                  </Col>
                  <Col xs={6}>
                   <div className='header-right'>
                      <div className='payment'> <FontAwesomeIcon icon={money}/>
                          <span>Onlayn Ödəmə</span>
                      </div>
                       <div className='phone'> <FontAwesomeIcon icon={faPhone}/>
                           <span>+994 12 310 34 84</span>
                       </div>
                       <div className='personal'> <FontAwesomeIcon icon={faUser}/>
                           <span>Şəxsi kobinet</span>
                       </div>
                       <div className='lang'>
                           <span>Ru | En</span>
                       </div>
                   </div>


                  </Col>
              </Row>
          </Container>
        </div>
    );
}

export default Home;