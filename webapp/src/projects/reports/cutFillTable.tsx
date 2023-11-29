import { Container, Table } from "reactstrap";

const ContextTable = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cut</td>
            <td>Large posthole, with a diameter of 67cm </td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>26/10/2023</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Fill</td>
            <td>
              Top fill in C00001, soil is a very light colour, and has a crumbly
              texture
            </td>
            <td>Sandy soils</td>
            <td>Yes</td>
            <td>N/A</td>
            <td>26/10/2023</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cut</td>
            <td>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
            </td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>27/10/2023</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Fill</td>
            <td>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
            </td>
            <td>Loamy soil</td>
            <td>No</td>
            <td>North-East of site</td>
            <td>27/10/2023</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Fill</td>
            <td>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
            </td>
            <td>Clay soils</td>
            <td>No</td>
            <td>27/10/2023</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ContextTable;
