import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: props.users,
    };
  }

  render() {
    const { records } = this.state;

    return (
      <div>
        <h1>Components</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Srno</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;