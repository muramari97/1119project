import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar,Row,Col} from 'react-onsenui';
import {notification} from 'onsenui';

import "./style.css";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {count:0,value:0,op:""};
    this.clear = this.clear.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.kakeru = this.kakeru.bind(this);
    this.waru = this.waru.bind(this);
    this.Number = this.Number.bind(this);
    this.equal = 
    this.equal.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>電卓アプリ</div>
      </Toolbar>
    );
  }

  Number(val){
    var s = this.state;
    s.count = this.state.count * 10 +val;
    this.setState(s);
  }

  clear(){
    this.setState({count:0,value:0,op:""});
  }

  plus(){
    var s = this.state;
    s.op = "+";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  minus(){
    var s = this.state;
    s.op = "-";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  kakeru(){
    var s = this.state;
    s.op = "*";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  waru(){
    var s = this.state;
    s.op = "/";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  equal(){
    var s = this.state;

    if(s.op == "+"){
      s.count = s.value + s.count;
    }
    else if(s.op == "-"){
      s.count = s.value - s.count;
    }
    else if(s.op == "*"){
      s.count = s.value * s.count;
    }
    else{
      s.count = s.value / s.count;
    }

    s.op = "";
    this.setState(s);
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
          <Col className="box">{this.state.count}</Col>
        </Row>
        <Row>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box" onClick={this.clear}>AC</Col>
        </Row>
        <Row>
          <Col className="box" onClick={() => this.Number(7)}>7</Col>
          <Col className="box" onClick={() => this.Number(8)}>8</Col>
          <Col className="box" onClick={() => this.Number(9)}>9</Col>
          <Col className="box" onClick={ this.waru}>÷</Col>
        </Row>
        <Row>
          <Col className="box" onClick={() => this.Number(4)}>4</Col>
          <Col className="box" onClick={() => this.Number(5)}>5</Col>
          <Col className="box" onClick={() => this.Number(6)}>6</Col>
          <Col className="box" onClick={ this.kakeru}>×</Col>
        </Row>
        <Row>
          <Col className="box" onClick={() => this.Number(1)}>1</Col>
          <Col className="box" onClick={() => this.Number(2)}>2</Col>
          <Col className="box" onClick={() => this.Number(3)}>3</Col>
          <Col className="box" onClick={ this.minus}>-</Col>
        </Row>
        <Row>
        <Col className="box"></Col>
        <Col className="box" onClick={() => this.Number(0)}>0</Col>
        <Col className="box" onClick={ this.equal}>=</Col>
        <Col className="box" onClick={this.plus}>+</Col>
        </Row>
      </Page>
    );
  }
}