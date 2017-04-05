import React from 'react';
import { Well, Button, Nav, NavItem, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="panel panel-default">
                {/* Default panel contents */}
                <div className="panel-heading">待購清單</div>
                {/* Table */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>標題:</th>
                                <th>序號:</th>
                                <th>原價:</th>
                                <th>折扣:</th>
                                <th>售價:</th>
                                <th>最小購買量:</th>
                                <th>選項:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(function(object, i){
                                return <Row obj={object} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let option_template = null;
        if( this.props.obj.options == undefined || this.props.obj.options == null || this.props.obj.options.length == 0 ){
            option_template = "無";
        } else {
            option_template = <select className="form-control">
                {this.props.obj.options.map(function(o,i){
                    return <option key={i} name={o}>{o}</option>;
                })}
            </select>;
        }
        return (<tr>
                    <td>{this.props.obj.title}</td>
                    <td>{this.props.obj.serial_number}</td>
                    <td>{this.props.obj.origin_price}</td>
                    <td>{this.props.obj.discount}</td>
                    <td>{this.props.obj.pay}</td>
                    <td>{this.props.obj.min_qty}</td>
                    <td>{option_template}</td>
                </tr>);
    }
}
export default List;