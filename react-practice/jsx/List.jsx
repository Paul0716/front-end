import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as firebase from 'firebase';
import fbConfig from './firebaseConfig.jsx';

// Make sure you swap this out with your Firebase app's config

const fb = firebase  
  .initializeApp(fbConfig)
  .database()
  .ref();

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.data.map(function(object, i){
                    return <Item obj={object} key={i} />;
                })}
            </div>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    updateSpec(el) {
        console.log("hello world!");
    }

    addToPurchaseList(obj) {
        console.log("add to product list.");
        fb.child("order/testuser").push({text:"hello world!"}, (err) => {
            if(err !== null){
                console.error(err);
            }
        });
    }
    

    render() {
        // option select template
        let option_template = null;
        if( this.props.obj.options == undefined || this.props.obj.options == null || this.props.obj.options.length == 0 ){
            option_template = "無";
        } else {
            option_template = <select className="form-control" onChange={this.updateSpec(e)} >
                {this.props.obj.options.map(function(o,i){
                    return <option key={i} name={o}>{o}</option>;
                })}
            </select>;
        }
        // select amount teplate

        var buy_amount_list = [];
        for(var i = this.props.obj.min_qty; i < 10; i++){
            buy_amount_list.push(i);
        }
        let select_amount_template = <select className="form-control" id="amount-select">
            {buy_amount_list.map(function(o,i){
                console.log(i);
                return <option key={i} name={o}>{o}</option>;
            })}
        </select>;
        
        
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.obj.title}</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><b>標題:</b></td>
                                <td>{this.props.obj.title}</td>
                            </tr>
                            <tr>
                                <td><b>序號:</b></td>
                                <td>{this.props.obj.serial_number}</td>
                            </tr>
                            <tr>
                                <td><b>原價:</b></td>
                                <td>{this.props.obj.origin_price}</td>
                            </tr>
                            <tr>
                                <td><b>折扣:</b></td>
                                <td>{this.props.obj.discount == "" ? "無": this.props.obj.discount}</td>
                            </tr>
                            <tr>
                                <td><b>售價:</b></td>
                                <td>{this.props.obj.pay == "" ? "無": this.props.obj.pay}</td>
                            </tr>
                            <tr>
                                <td><b>最小購買量:</b></td>
                                <td>{this.props.obj.min_qty}</td>
                            </tr>
                            <tr>
                                <td><b>規格:</b></td>
                                <td>{option_template}</td>                    
                            </tr>
                            <tr>
                                <td><b>購買數量:</b></td>
                                <td>
                                    {select_amount_template}
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary" type="button" onClick={this.addToPurchaseList(this.props.obj)}> 加入購物清單</button>
                </div>
            </div>
        );
    }
}
export default List;