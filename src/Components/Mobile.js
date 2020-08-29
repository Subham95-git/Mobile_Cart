import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import  './Mobile.css';



class mobile extends Component{

    state = {
        visible: false
    }
    
    renderTable=()=>{
        let check = this.state.visible
        this.setState({  
            visible:!check
        });
    }
   
render(props){
    let datatable = null
    if(this.state.visible){
        datatable= <TableData data={this.props.data}  />
    }
    else{
        datatable= null
    }
    return(
    
       <div class="card-deck mt-4" style={{width:"340px"}}>
            <div className='card' style={{width:"400px"}}>
                <div className='card-header bg-warning'>
                    <h4 className=" card-title text text-center">{this.props.data.name}</h4>
                </div>
                <img className="card-img-top" src={this.props.data.image} alt="Card image cap"></img>
                <div className='card-body'>
                    <div className="btn-group">
                    
                    <button type='button' className='btn btn-warning btn-sm' onClick={this.renderTable}>Specifications</button>
                    &nbsp; &nbsp; &nbsp;
                    <button type='button' className='btn btn-warning btn-sm' >Add to Cart</button>
                    &nbsp; &nbsp; &nbsp;
                    <button type='button' className='btn btn-success btn-sm' >Buy Now</button>
                    
                    </div>
                    <br></br><br></br><br></br>
                    {datatable}
                    
                </div>
                <div className="card-footer bg-dark">
                    <h6 className="text text-light">Price: Rs. {this.props.data.Price}</h6>
                </div>
            </div>
        </div>
    
    
);
}
   
};


const TableData = (props)=>{
    return(
            <div >
                <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>RAM</th> <th>Camera</th> <th>Processor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data.RAM}</td>
                        <td>{props.data.Camera}</td>
                        <td>{props.data.Processor}</td>
                    </tr>
                </tbody>
            </table>
            </div>
    );
}

export default mobile;