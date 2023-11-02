import { Container, Table } from "reactstrap";

const ComingSoon = () => {
  return (
    <div>
      <br></br>
      {/* <h1>Reports page is working</h1> */}
      <h2>This page is coming soon ...</h2>
      <div>
        <Container>
          <h3>____ Register: </h3>
          <h6>Project Name: </h6>
          <h6>Project ID: </h6>
          <h6>Site Name: </h6>
          <h6>Licence Number: </h6>
          <h6>Area: </h6>
          <Table>
            <thead>
              <tr>
                <th>Accusantium</th>
                <th>Por scientie</th>
                <th>Sed ut perspiciatis</th>
                <th>Lor separat existentie es un myth</th>
                <th>Material</th>
                <th>Totam rem aperiam</th>
                <th>Laudantium</th>
                <th>lingues es membres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>#00000</td>
                <td>#00000</td>
                <td>
                  Li Europan lingues es membres del sam familie. Lor separat
                  existentie es un myth. Por scientie, musica, sport etc, litot.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab
                </td>
                <td>Lor separat existentie es un myth.</td>
                <td>Sed ut perspiciatis unde omnis iste natus</td>
                <td>Por scientie, musica, sport etc</td>
                <td>
                  Sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};
export default ComingSoon;
