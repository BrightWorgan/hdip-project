import { Container, Table, Input } from "reactstrap";

const FindsTable = (props: any) => {
  return (
    <Container>
      <h3>Finds Register: </h3>
      <Table>
        <thead>
          <tr>
            <th>Finds Number</th>
            <th>Context Number</th>
            <th>Fill Number</th>
            <th>Description</th>
            <th>Material</th>
            <th>Photograph</th>
            <th>Bagged</th>
            <th>Date</th>
            <th>Found by</th>
          </tr>
        </thead>
        <tbody>
          {props?.finds?.map((find: any) => {
            return (
              <tr key={find.findsNumber}>
                {/* checkbox */}
                <td>
                  <Input
                    type="checkbox"
                    onChange={() => props.onChecked(find)}
                  />
                </td>
                <td>{find.findsNumber}</td>
                <td>{find.contextNumber}</td>
                <td>{find.description}</td>
                <td>{find.material}</td>
                <td>{find.photograph}</td>
                <td>{find.bagged}</td>
                <td>{find.date}</td>
                <td>
                  {find.forename + " " + find.surname.substring(0, 1) + "."}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FindsTable;
