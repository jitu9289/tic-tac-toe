
import React, { useState } from 'react';
import Icons from "./Components/Icons.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap';

const itemArray = new Array(9).fill("empty");



const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMeassage] = useState("");

  const relaodgame = () => {
    setIsCross(false)
    setWinMeassage("")
    itemArray.fill("empty",0,9);
  }


  const checkwinner = () => {
    
    if(itemArray[0]!=="empty" && itemArray[0]===itemArray[1] &&  itemArray[0]===itemArray[2]){
      setWinMeassage(`${itemArray[0]} win`)
    }else if(itemArray[3]!=="empty" && itemArray[3]===itemArray[4] &&  itemArray[3]===itemArray[5]){
      setWinMeassage(`${itemArray[3]} win`)
    }else if(itemArray[6]!=="empty" && itemArray[6]===itemArray[7] &&  itemArray[6]===itemArray[8]){
      setWinMeassage(`${itemArray[6]} win`)
    }else if(itemArray[1]!=="empty" && itemArray[1]===itemArray[4] &&  itemArray[1]===itemArray[7]){
      setWinMeassage(`${itemArray[1]} win`)
    }else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[5] &&  itemArray[2]===itemArray[8]){
      setWinMeassage(`${itemArray[2]} win`)
    }else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[4] &&  itemArray[0]===itemArray[8]){
      setWinMeassage(`${itemArray[0]} win`)
    }else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[4] &&  itemArray[2]===itemArray[6]){
      setWinMeassage(`${itemArray[2]} win`)
    }
  }
  
  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage,{type:"success"});
    }
   
   if(itemArray[itemNumber]!=="empty"){
      relaodgame();
      return toast("match draw",{type:"error"})
   }
  
    if (itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]= isCross ? "cross" : "circle"
      setIsCross(!isCross)
    
    }else{
      return toast("Already Filled", {type:"error"})
    }
    
    checkwinner();
  }
  


  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage?(
          <div className="mb-2 mt-2">
          <h1 className="text-success text-uppercase text-center">
            {winMessage}
          </h1>
          <Button  color="success" block onClick={relaodgame}
          > Reload </Button>

          </div>
        ):(
          <h1 className="text-center text-warning">
          {isCross ?"Cross":"Circle"}
           Turns
          </h1>
        )
      }
      
      <div className="grid">
            {itemArray.map((items, index) => (
              <Card color="warning" onClick={()=>changeItem(index)}>
                <CardBody className="Box">
                  <Icons name={items} />
                </CardBody>
              </Card>
            ))}
    </div>
        </Col>
   </Row>
    </Container>
  );
};

export default App;
