import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GridSystem = ({colCount, children, md})=>{

    let rowCount = Math.floor(children.length/colCount);
    console.log('rowCount',rowCount);
    let index = 0;

    const buidGrid = ()=>{
        return (
            
            renderRows()
        );
    }

    const renderRows = () =>{
        let rows = []
        for (let row = 0; row < rowCount; row++) {
           
            rows.push(
                <Row className="Row">
                    {renderCols()}
                </Row>
            )
            
        }
        console.log('renderRows');
        return rows;

    }

    const renderCols = () =>{
        let cols = []
        for (let col = 0; col < colCount; col++) {
            if(index < children.length){
                cols.push(
                   <Col className="Col">
                    {children[index]}
                   </Col> 
                )
                index++;
            }
            
        }
        console.log('renderCols');
        return cols;
    }

    return (
      <Container className='Container'>
        {
            buidGrid()
        }

      </Container>

    );

};

export default GridSystem;