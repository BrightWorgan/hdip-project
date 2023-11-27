import { Container, Table } from "reactstrap";

const FindsTable = () => {
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
            <th>Found by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>#00032</td>
            <td>#00034</td>
            <td>Simple copper pendant, no decoration, some pitted areas</td>
            <td>Copper</td>
            <td>Photograph</td>
            <td>Yes</td>
            <td>Found by Sarah</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>#00052</td>
            <td>#00054</td>
            <td>
              Decorated cream and sable flint macehead, carved with symbolic
              patterns, possibly Neolithic
            </td>
            <td>Stone</td>
            <td>Photograph</td>
            <td>Yes</td>
            <td>Found by John</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>#00062</td>
            <td>#00067</td>
            <td>
              Decorated bowl with Bronze age pattern, possibly middle Bronze Age
            </td>
            <td>Ceramic</td>
            <td>Photograph</td>
            <td>No</td>
            <td>Found by Cormac</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default FindsTable;
