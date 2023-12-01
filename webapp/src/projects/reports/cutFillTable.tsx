import { Container, Table } from "reactstrap";

const ContextTable = (props: any) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Context Number #</th>
            <th>Type (Cut / Fill)</th>
            <th>Description</th>
            <th>Soil Type</th>
            <th>Samples</th>
            <th>Location</th>
            <th>Date</th>
            <th>Found by</th>
          </tr>
        </thead>
        <tbody>
          {props?.contexts?.map((context: any) => {
            return (
              <tr key={context.contextNumber}>
                <td>{context.contextNumber}</td>
                <td>{context.type}</td>
                <td>{context.description}</td>
                <td>{context.soilType}</td>
                <td>{context.samples}</td>
                <td>{context.location}</td>
                <td>{context.date}</td>
                <td>
                  {context.forename +
                    " " +
                    context.surname.substring(0, 1) +
                    "."}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContextTable;
