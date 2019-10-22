import React, { Component } from 'react';


export class Table extends Component {
    render() {
      var count = this.props.count;
        return (
          <div className="score">
          {count>=8?(<h2> Game Over<p> Your Score is  <span>{64-(this.props.score)}</span></p></h2>):
        (<p></p>)}
        </div>
        );
    }
}

export default Table;
