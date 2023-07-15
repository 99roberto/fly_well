import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnGoBack = ({onClick, children})=>{
    return (
      <Button variant="danger" onClick={onClick} style={{minWidth:"300px", maxWidth:"300px"}}>
                      <FontAwesomeIcon icon={faCircleChevronLeft} style={{marginRight:10}}/>
                        {children}
                      </Button>
    )
  }


export default BtnGoBack;