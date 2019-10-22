import React, { Component } from 'react';







export class Table extends Component {





constructor(props) {
super(props);
console.log(this.props)
                     }
  
  
render() {  
if(this.props.statesData){
var {t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30}=this.props.statesData  
var {t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,t57,t58,t59,t60}=this.props.statesData
var {t61,t62,t63,t64}=this.props.statesData
var {count}=this.props
} 


      
return (
    <div >
      <h1>Find The Diamonds</h1>
      <div className="messages">
        <table className="diamondsweeper-board">
          <tbody>
            <tr>
              <td><button disabled={t1===false && count<8?false:true} onClick={this.props.handleclick} data-key={1} className={`${t1===true?"cell diamond":t1===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t2===false && count<8?false:true} data-key={2} className={`${t2===true?"cell diamond":t2===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t3===false && count<8?false:true} data-key={3} className={`${t3===true?"cell diamond":t3===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t4===false && count<8?false:true} data-key={4} className={`${t4===true?"cell diamond":t4===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t5===false && count<8?false:true} data-key={5} className={`${t5===true?"cell diamond":t5===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t6===false && count<8?false:true} data-key={6} className={`${t6===true?"cell diamond":t6===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t7===false && count<8?false:true} data-key={7} className={`${t7===true?"cell diamond":t7===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t8===false && count<8?false:true} data-key={8} className={`${t8===true?"cell diamond":t8===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t9===false && count<8?false:true} data-key={9}  className={`${t9 ===true?"cell diamond":t9===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t10===false && count<8?false:true} data-key={10} className={`${t10===true?"cell diamond":t10===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t11===false && count<8?false:true} data-key={11} className={`${t11===true?"cell diamond":t11===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t12===false && count<8?false:true} data-key={12} className={`${t12===true?"cell diamond":t12===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t13===false && count<8?false:true} data-key={13} className={`${t13===true?"cell diamond":t13===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t14===false && count<8?false:true} data-key={14} className={`${t14===true?"cell diamond":t14===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t15===false && count<8?false:true} data-key={15} className={`${t15===true?"cell diamond":t15===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t16===false && count<8?false:true} data-key={16} className={`${t16===true?"cell diamond":t16===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t17===false && count<8?false:true} data-key={17} className={`${t17===true?"cell diamond":t17===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t18===false && count<8?false:true} data-key={18} className={`${t18===true?"cell diamond":t18===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t19===false && count<8?false:true} data-key={19} className={`${t19===true?"cell diamond":t19===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t20===false && count<8?false:true} data-key={20} className={`${t20===true?"cell diamond":t20===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t21===false && count<8?false:true} data-key={21} className={`${t21===true?"cell diamond":t21===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t22===false && count<8?false:true} data-key={22} className={`${t22===true?"cell diamond":t22===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t23===false && count<8?false:true} data-key={23} className={`${t23===true?"cell diamond":t23===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t24===false && count<8?false:true} data-key={24} className={`${t24===true?"cell diamond":t24===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t25===false && count<8?false:true} data-key={25} className={`${t25===true?"cell diamond":t25===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t26===false && count<8?false:true} data-key={26} className={`${t26===true?"cell diamond":t26===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t27===false && count<8?false:true} data-key={27} className={`${t27===true?"cell diamond":t27===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t28===false && count<8?false:true} data-key={28} className={`${t28===true?"cell diamond":t28===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t29===false && count<8?false:true} data-key={29} className={`${t29===true?"cell diamond":t29===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t30===false && count<8?false:true} data-key={30} className={`${t30===true?"cell diamond":t30===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t31===false && count<8?false:true} data-key={31} className={`${t31===true?"cell diamond":t31===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t32===false && count<8?false:true} data-key={32} className={`${t32===true?"cell diamond":t32===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t33===false && count<8?false:true} data-key={33} className={`${t33===true?"cell diamond":t33===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t34===false && count<8?false:true} data-key={34} className={`${t34===true?"cell diamond":t34===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t35===false && count<8?false:true} data-key={35} className={`${t35===true?"cell diamond":t35===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t36===false && count<8?false:true} data-key={36} className={`${t36===true?"cell diamond":t36===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t37===false && count<8?false:true} data-key={37} className={`${t37===true?"cell diamond":t37===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t38===false && count<8?false:true} data-key={38} className={`${t38===true?"cell diamond":t38===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t39===false && count<8?false:true} data-key={39} className={`${t39===true?"cell diamond":t39===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t40===false && count<8?false:true} data-key={40} className={`${t40===true?"cell diamond":t40===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t41===false && count<8?false:true} data-key={41} className={`${t41===true?"cell diamond":t41===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t42===false && count<8?false:true} data-key={42} className={`${t42===true?"cell diamond":t42===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t43===false && count<8?false:true} data-key={43} className={`${t43===true?"cell diamond":t43===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t44===false && count<8?false:true} data-key={44} className={`${t44===true?"cell diamond":t44===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t45===false && count<8?false:true} data-key={45} className={`${t45===true?"cell diamond":t45===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t46===false && count<8?false:true} data-key={46} className={`${t46===true?"cell diamond":t46===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t47===false && count<8?false:true} data-key={47} className={`${t47===true?"cell diamond":t47===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t48===false && count<8?false:true} data-key={48} className={`${t48===true?"cell diamond":t48===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t49===false && count<8?false:true} data-key={49} className={`${t49===true?"cell diamond":t49===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t50===false && count<8?false:true} data-key={50} className={`${t50===true?"cell diamond":t50===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t51===false && count<8?false:true} data-key={51} className={`${t51===true?"cell diamond":t51===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t52===false && count<8?false:true} data-key={52} className={`${t52===true?"cell diamond":t52===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t53===false && count<8?false:true} data-key={53} className={`${t53===true?"cell diamond":t53===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t54===false && count<8?false:true} data-key={54} className={`${t54===true?"cell diamond":t54===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t55===false && count<8?false:true} data-key={55} className={`${t55===true?"cell diamond":t55===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t56===false && count<8?false:true} data-key={56} className={`${t56===true?"cell diamond":t56===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
            <tr>
              <td><button onClick={this.props.handleclick} disabled={t57===false && count<8?false:true} data-key={57} className={`${t57===true?"cell diamond":t57===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t58===false && count<8?false:true} data-key={58} className={`${t58===true?"cell diamond":t58===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t59===false && count<8?false:true} data-key={59} className={`${t59===true?"cell diamond":t59===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t60===false && count<8?false:true} data-key={60} className={`${t60===true?"cell diamond":t60===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t61===false && count<8?false:true} data-key={61} className={`${t61===true?"cell diamond":t61===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t62===false && count<8?false:true} data-key={62} className={`${t62===true?"cell diamond":t62===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t63===false && count<8?false:true} data-key={63} className={`${t63===true?"cell diamond":t63===false && count<8?"cell unknown":"cell"}`}></button></td>
              <td><button onClick={this.props.handleclick} disabled={t64===false && count<8?false:true} data-key={64} className={`${t64===true?"cell diamond":t64===false && count<8?"cell unknown":"cell"}`}></button></td>
            </tr>
          </tbody>
        </table>
  </div>
  </div>
          
            
        );
    }
}

export default Table;
