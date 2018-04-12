import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

class Page1 extends Component {

  constructor(props) {
    super(props)
    this.showToast();
  }

  showToast(type){
    switch(type){
      case 'success': 
        toast.success("New message received!", {
          position: toast.POSITION.TOP_RIGHT
        });
        break;

        case 'warn': 
        toast.warn("New message received!", {
          position: toast.POSITION.TOP_RIGHT
        });
        break;

        case 'danger': 
        toast.error("New message received!", {
          position: toast.POSITION.TOP_RIGHT
        });
        break;
      
      default: {
        toast.success("New message received!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
    
   }

  render() {
    return ( 
      <div>    
        <h1 className="animated fadeIn">Page 1</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div>
          <hr />
          <button className="btn btn-success btn-lg" onClick={ () => {this.showToast('success')}}>Click me!</button>
          <button className="btn btn-warning btn-lg" onClick={ () => {this.showToast('warn')}}>Click me!</button>
          <button className="btn btn-danger btn-lg" onClick={ () => {this.showToast('danger')}}>Click me!</button>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Page1;
