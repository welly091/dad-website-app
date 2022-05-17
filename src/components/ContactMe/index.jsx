import React, { Component } from 'react'
import {Button, Form} from 'react-bootstrap'
import './index.css'

export default class ContactMe extends Component {
  state={
    name:'',
    email:'',
    phone:''
  }


  updateState = (e) =>{
    console.log(this.state)
    this.setState({[e.target.id]:e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    
  }

  render() {
    console.log(this.state)
    return (
      <div className='text-light contactMeForm'>
        <Form className='m-4 p-4' onSubmit={this.handleSubmit}>
          <div className='formDescription'>
            <div>想收到更多謝老師的訊息嗎?</div>
            <div>留下你的資料吧</div>
          </div>
          <Form.Group className='m-3'>
            <Form.Label htmlFor='name'>名字</Form.Label>
            <Form.Control id='name' onChange={this.updateState}></Form.Control>
          </Form.Group>
          <Form.Group className='m-3'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control id='email' onChange={this.updateState}></Form.Control>
          </Form.Group>
          <Form.Group className='m-3'>
            <Form.Label htmlFor='phone'>電話</Form.Label>
            <Form.Control id='phone' onChange={this.updateState}></Form.Control>
          </Form.Group>
          <Button className='m-3 bg-dark' type="submit">確認</Button>
        </Form>
      </div>
      
    )
  }
}
