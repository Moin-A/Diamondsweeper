import React, { Component } from 'react';

class Count extends Component {
    render() {
        var count = this.props.count;
        return (
            <div className="count">
            {count===0?(<p>Find All 8 Diamonds</p>):
         count===8?(<button><a href="javascript:history.go(0)">Play Again</a></button>):(<p><span>{8-count}</span> More To Go</p>)}
          </div>
        );
    }
}

export default Count;