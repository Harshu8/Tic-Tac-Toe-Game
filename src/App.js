import React,{ useState } from 'react';

import Icon from "./component/icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';


const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0, 9 );
  }

  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wons`);
      } 
    else if( itemArray[3] === itemArray[4] && 
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wons`);
    } 
    else if( itemArray[6] === itemArray[7] && 
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} wons`);
    } 

    else if( itemArray[0] === itemArray[3] && 
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wons`);
    } 
    else if( itemArray[1] === itemArray[4] && 
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} wons`);
    } 
    else if( itemArray[2] === itemArray[5] && 
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wons`);
    } 

    else if( itemArray[0] === itemArray[4] && 
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wons`);
    } 
    else if( itemArray[2] === itemArray[4] && 
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wons`);
    }
  }

  const changeItem = itemNumber => {
    if (winMessage)
    {
      return toString(winMessage, {type:"Success"});
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }
    else {
      
      return toast("already filled", {type: "error"})
      
    }

    checkIsWinner();


  };


  return (
    <>
    <Container className='p-5'>
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-cnter'>{winMessage}</h1>
              <Button color='success' block onClick={reloadGame}>Reload the Game</Button>
            </div>
          ) : (
              <h1 className='text-center text-warning'>
                { isCross ? "Cross" : "Circle" } turns
              </h1>
          ) }
          <div className='grid'>
            {itemArray.map( (item, index) => ( 
              <Card  color="warning" onClick={ () => changeItem(index) }>
                <CardBody className='box'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
          
        </Col>
      </Row>
    </Container>
    
    <p className='text-center text-warning'>Made with ❤️ By - Harsh Upadhyay</p>
    </>

  );
}

export default App;
