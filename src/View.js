import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import { useState } from 'react';
import {cardgroup} from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import Button from 'react'; 
import Likes from './Likes'; 

// class View extends React.Component

  function View(props){


  const buildRows = () =>  {
    return props.todos.map((current) => (
      <tr key={current.id} className="Columns">
        <td>
          {current.id}
        </td>
        <td>
          {current.description}
        </td>        
        <td>
          {Likes()}
        </td>
        <td>
          {Likes()}
        </td>
      </tr>
    )
    )
  }


    return (
      <>
        <Table striped bordered hover>
          <thead className="Headings">
            <tr>
              <th>User Name</th>
              <th>Posts</th>
              <th>Likes</th>
              <th>Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

}


export default View;
