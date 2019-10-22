import React, { Component } from 'react';
import Table from './components/Table'
import Count from './components/Count'
import Score from './components/Score'





class App extends Component {
  
getData(){
  const fetchresponse=fetch('/states.json')
  fetchresponse.then(data=>{return data.json()})
  .then(data=>{
      this.setState({
      statesData:data
      })
  })
}


componentWillMount(){
  this.getData()
} 

componentDidMount(){
  let Arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,24,26,28,30,31,32,33,34,44,50,55,60,61]
  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  let arr=Shuffle(Arr).slice(0,8)
  this.setState({arr})
  
}


state={
count:0,
score:0
}


handleclick=(e)=>{
  console.log(e)
  let arr= this.state.arr
  let primevalue
  if(Number(e.target.attributes[0])!==undefined){
  var key = Number(e.target.attributes[0].value)
  arr.includes(key)?primevalue=true:primevalue=null
  if(arr.includes(key)){
  var count={...this.state.count} 
  count=Number(this.state.count)+1
  this.setState({count})
  }
  const statesData={...this.state.statesData}
  var score={...this.state.score}
  score=Number(this.state.score)+1
  statesData[`t${key}`]=primevalue
  this.setState({statesData,score})
  console.log(statesData[`t${key}`])
  
}
}


 
  
  render() {  
   
    return (
      <div>
        <Table handleclick={this.handleclick} statesData={this.state.statesData} count={this.state.count}/>
        <Count count={this.state.count}/>
        <Score score={this.state.score} count={this.state.count}/>
      </div>
    );
  }
}

export default App;