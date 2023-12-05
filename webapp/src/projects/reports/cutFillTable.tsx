import { Container, Table, Input } from "reactstrap";

const ContextTable = (props: any) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th></th>
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
                {/* checkbox */}
                <td>
                  <Input
                    type="checkbox"
                    onChange={() => props.onChecked(context)}
                  />
                </td>
                <td>{context.contextNumber}</td>
                <td>{context.type}</td>
                <td>{context.description}</td>
                <td>{context.soilType}</td>
                <td>{context.samples}</td>
                <td>{context.location}</td>
                <td>{new Date(context.date).toDateString()}</td>
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
