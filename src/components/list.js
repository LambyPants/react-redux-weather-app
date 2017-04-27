import React, { Component } from 'react';


export default class List extends Component {
    renderList(data,i) {
        return (
            <div key={i}>
            <li className="list-group-item list-group-item-success" key={i}>{data} </li>
            
            </div>
            );
    }

 render() {
     return(
         <div>
            <ul className="list-group">
                {this.props.data.map(this.renderList)} 
            </ul>
         </div>
         );
 }
}
    