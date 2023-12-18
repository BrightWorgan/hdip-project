import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import util from "../../util";

const FindsTable = (props: any) => {
  const [selectedFind, setSelectedFind] = useState<any>(null);
  const [photos, setPhotos] = useState<any[]>([]);
  const isOpen = selectedFind !== null;
  const closeModal = () => {
    setSelectedFind(null);
  };
  const openModal = (find: any) => {
    setSelectedFind(find);
  };

  useEffect(() => {
    if (selectedFind === null) {
      return;
    }
    util.get(`/find/photo/${selectedFind.findNumber}`).then((result) => {
      // axios way:
      setPhotos(result?.data);
    });
  }, [isOpen]);

  return (
    <Container>
      <h3>Finds Register: </h3>

      <Modal isOpen={isOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{"Find Image(s):"}</ModalHeader>
        <ModalBody>
          {photos.map((photo) => {
            return (
              <img
                key={photo.photoID}
                alt=""
                src={`data:image/png;base64,${photo.uri}`}
                width="30%"
              />
            );
          })}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
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
            <th>Images</th>
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
                <td>
                  <Button
                    className="ss-info-btn"
                    onClick={() => openModal(find)}
                  >
                    Images
                  </Button>
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
