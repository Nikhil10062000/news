import React from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
const NewsItem = (props) => {
  
  return (
    <>
      <div className="container mb-3 ms-3">
        <Card style={{ width: "18rem" ,  height:'50rem'}}>
          <Card.Img variant="top" src={props.elem.urlToImage} />
          <Card.Body>
            <Card.Title>{props.elem.title}</Card.Title>
            <Card.Title>Author : {props.elem.author}</Card.Title>
            <Card.Text>{props.elem.description}</Card.Text>
            <Button variant="danger" href={props.elem.url}>
              Main Article
            </Button>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Add Comment"
                aria-label="Add Comment"
                aria-describedby="basic-addon2" 
              
                
                
              />
              <Button variant="outline-secondary" id="button-addon2">
                Comment
              </Button>
            </InputGroup>
            <ol>
        
      </ol>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default NewsItem;
