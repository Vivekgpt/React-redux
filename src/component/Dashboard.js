import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render(){
        return (
            <div className="dash">
              <Link to="/addinfo"><button>ADD NEW USERS</button></Link><br/>
              <Link to="/viewinfo"><button>VIEW ALL USERS</button></Link>
            </div>
        );
    }
}

export default Dashboard;