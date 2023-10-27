import { Container, Input, Table } from "reactstrap";

const FindsTable = (props) => {
  return (
    <Container>
      <h3>Finds: </h3>
      <h6>Project: </h6>
      <h6>Site Name: </h6>
      <h6>Licence Number: </h6>
      <h6>Area: </h6>
      <Table>
        <thead>
          <tr>
            <th>Finds Number #</th>
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
            <td>
              Description: simple copper pendant, no decoration, some pitted
              areas
            </td>
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
              Description: decorated cream and sable flint macehead, carved with
              symbolic patterns, possibly Neolithic
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
              Description: Decorated bowl with Bronze age pattern, possibly
              middle Bronze Age
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
