import React from 'react';
import { connect } from 'react-redux';


class ViewInfo extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    sortAssendCibil = () => {
      this.setState({
        store: this.props.viewData.allData.stored_data.sort((a, b) => a.cibilScore - b.cibilScore)
      })
    }

    sortDesendCibil = () => {
      this.setState({
        store: this.props.viewData.allData.stored_data.sort((a, b) => b.cibilScore - a.cibilScore)
      })
    }

    sortAssendLoan = () => {
      this.setState({
        store: this.props.viewData.allData.stored_data.sort((a, b) => a.loanAmount - b.loanAmount)
      })
    }

    sortDesendLoan = () => {
      this.setState({
        store: this.props.viewData.allData.stored_data.sort((a, b) => b.loanAmount - a.loanAmount)
      })
    }

    render(){
        // console.log(this.props.viewData.allData.stored_data);
        var store = this.props.viewData.allData.stored_data;
        return(
            <React.Fragment>
              <h3 className="filter">Filter By Loan type
                <select>
                  {store.map((a, e) => {
                    return(
                      <option key={e}>{a.loanType}</option>
                      )
                  })}
                </select>
              </h3>
                <table className="table">
                  <thead className="tablehead">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Email</th>
                      <th scope="col">
                        <button onClick={() => this.sortAssendCibil()} className="sortBtn">&#11014;</button>
                        <button onClick={() => this.sortDesendCibil()} className="sortBtn">&#11015;</button><br/>
                        CIBIL Score
                      </th>
                      <th scope="col">
                        <button onClick={() => this.sortAssendLoan()} className="sortBtn">&#11014;</button>
                        <button onClick={() => this.sortDesendLoan()} className="sortBtn">&#11015;</button><br/>
                        Loan Amount
                      </th>
                      <th scope="col">Loan Type</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  {store.map((item, i) => {
                    return (
                      <tbody key={i}>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.email}</td>
                          <td>{item.cibilScore}</td>
                          <td>{item.loanAmount}</td>
                          <td>{item.loanType}</td>
                          <td><button className="delete">&#10007;</button></td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        viewData: state
    }
}

export default connect(mapStateToProps) (ViewInfo);