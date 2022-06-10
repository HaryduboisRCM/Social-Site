import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import LikeIcon from './wizard.png'
import DislikeIcon from './reptile.png'
import './App.css';
function Counter(props) {
  return (
    <Card>
      <Card.Text>
        <p>{props.count}</p>
        <Image onClick={() => props.increaseCounter()} fluid className="mx-auto" src={LikeIcon} width="45px" alt="The Like Wizard" />
    </Card.Text>
    <Card.Text>
        <p>{props.count}</p>
        <Image onClick={() => props.increaseCounter()} fluid className="mx-auto" src={DislikeIcon} width="45px" alt="The Disike Lizard" />
    </Card.Text>
    </Card>
  );
}
export default Counter;

