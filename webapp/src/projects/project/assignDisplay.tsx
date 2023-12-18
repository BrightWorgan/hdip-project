import { Button, Container, Table, Input, InputGroup } from "reactstrap";
import { useState, useEffect } from "react";
import util from "../../util";

const AssignmentDisplay = (props: any) => {
  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    //TO DO
  };

  // use state variables
  const [users, setUsers] = useState<any[]>([]);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const onSearch = (e: any) => {
    setSearch(e?.target?.value);
  };

  useEffect(() => {
    util
      .get(`/user?position=Director&search=${search}`)
      .then(async (result) => {
        // axios way:
        setUsers(result?.data);
      });
    util.get(`/assignments/${props.project.projectID}`).then(async (result) => {
      // axios way:
      setAssignments(result?.data);
    });
  }, [search]);

  const onChecked = async (user: any) => {
    await util.put(`/assignments`, {
      projectID: props.project.projectID,
      userID: user.userID,
    });
    util.get(`/assignments/${props.project.projectID}`).then(async (result) => {
      // axios way:
      setAssignments(result?.data);
    });
  };

  return (
    <Container onSubmit={onSubmit}>
      {/* <h2>Working</h2> */}
      <InputGroup>
        <Input
          value={search}
          onChange={(e) => {
            onSearch(e);
          }}
          placeholder="Search ....."
        >
          {" "}
        </Input>
        <Button color="danger" onClick={() => setSearch("")}>
          Clear
        </Button>
      </InputGroup>

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => {
            return (
              <tr key={user.number}>
                <td>
                  {user.forename + " " + user.surname.substring(0, 1) + "."}
                </td>
                <td>{user.position}</td>
                {/* checkbox */}
                <td>
                  <Input
                    type="checkbox"
                    onChange={() => onChecked(user)}
                    checked={assignments?.some(
                      (assignment) => assignment.userID === user.userID
                    )}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="ss-table-footer"></tfoot>
      </Table>
    </Container>
  );
};

export default AssignmentDisplay;
