import React from 'react';
import { connect } from 'react-redux';
import { addDespInfo } from '../redux/Action';


class AddInfo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: "",
            name: "",
            age: "",
            email: "",
            cibilScore: "",
            loanAmount: "",
            loanType: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addInfoBtn = (e) => {
        e.preventDefault();

        const addData = {
            id: Math.random(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            cibilScore: this.state.cibilScore,
            loanAmount: this.state.loanAmount,
            loanType:this.state.loanType
        }

        this.props.addInfo(addData);
        // console.log(addData);
        // this.props.history.push('/viewinfo')
        this.reset()
    }

    reset = () => {
        this.setState({
            name: "",
            age: "",
            email: "",
            cibilScore: "",
            loanAmount: "",
            loanType: ""
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="addinfo">
                    <div>
                        <h2>Add New Users</h2>
                    </div>
                    <div>
                        <input 
                            type="name"
                            placeholder="Name" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.name} 
                            name="name"
                        />
                    </div>
                    <div>
                        <input 
                            type="number"
                            placeholder="Age" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.age} 
                            name="age"
                        />
                    </div>
                    <div>
                        <input 
                            type="email"
                            placeholder="Email" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            name="email"
                        />
                    </div>
                    <div>
                        <input 
                            type="number"
                            placeholder="CIBIL Score" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.cibilScore} 
                            name="cibilScore"
                        />
                    </div>
                    <div>
                        <input 
                            type="number"
                            placeholder="Loan Amount" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.loanAmount} 
                            name="loanAmount"
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder="Loan Type" 
                            required 
                            onChange={this.handleChange} 
                            value={this.state.loanType} 
                            name="loanType"
                        />
                    </div>
                    <div>
                        <button onClick={this.addInfoBtn}>Add Info</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addInfo: (data) => dispatch(addDespInfo(data))
})

export default connect(null, mapDispatchToProps) (AddInfo);