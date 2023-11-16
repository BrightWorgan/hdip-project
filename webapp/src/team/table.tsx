import { Input, Table } from "reactstrap";

const TeamTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Email Address</th>
          <th>Home Address</th>
          <th>Experience</th>
          <th>Education</th>
          <th>Training Certs</th>
          <th>Drive</th>
          <th>Company Position</th>
          <th>Current Site</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.number}>
              <td>
                <Input type="checkbox" onChange={() => props.onChecked(user)} />
              </td>
              <td>{user.forename}</td>
              <td>{user.surname}</td>
              <td>{user.number}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.experience}</td>
              <td>{user.education}</td>
              <td>{user.certs}</td>
              <td>{user.driving}</td>
              <td>{user.position}</td>
              <td>{user.site}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TeamTable;
