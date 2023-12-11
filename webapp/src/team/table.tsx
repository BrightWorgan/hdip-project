import { Table, Button, Input, Row, Col, ButtonGroup } from "reactstrap";

const TeamTable = (props: any) => {
  return (
    <div>
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
          {props?.users?.map((user: any) => {
            return (
              <tr key={user.number}>
                {/* checkbox */}
                <td>
                  <Input
                    type="checkbox"
                    onChange={() => props.onChecked(user)}
                  />
                </td>
                <td>{user.forename}</td>
                <td>{user.surname}</td>
                <td>{user.number}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.experience}</td>
                <td>{user.education}</td>
                <td>{user.training}</td>
                <td>{user.driving}</td>
                <td>{user.position}</td>
                <td>{user.site}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="ss-table-footer"></tfoot>
      </Table>
      <Row>
        <Col xs={{ offset: 10, size: 2 }}>
          <ButtonGroup style={{ float: "right" }}>
            <Button
              className="ss-pagination-btn"
              onClick={() => props.onPrev()}
              disabled={props.onPrev === null}
            >
              Prev
            </Button>
            <Button
              className="ss-pagination-btn"
              onClick={() => props.onNext()}
              disabled={props.onNext === null}
            >
              Next
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TeamTable;
