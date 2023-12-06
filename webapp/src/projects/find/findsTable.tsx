import { Container, Table, Input } from "reactstrap";

const FindsTable = (props: any) => {
  return (
    <Container>
      <h3>Finds Register: </h3>
      <Table>
        <thead>
          <tr>
            <th> </th>
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
                <td>{find.findNumber}</td>
                <td>{find.contextNumber}</td>
                <td>{find.fillNumber}</td>
                <td>{find.description}</td>
                <td>{find.material}</td>
                <td>{find.photograph}</td>
                <td>{find.bagged}</td>
                <td>{new Date(find.date).toDateString()}</td>
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
