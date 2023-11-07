import Caneca from "./components/Caneca";
import { Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col className="custom-border">
            <h3>Colegio Bilingüe Jose Allamano</h3>
          </Col>
          <br></br>
          <Col className="custom-border">
            <Row>
              <Col className="custom-border2">
                <Caneca></Caneca>
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>Angélica Riojas</td>
            </tr>
            <tr>
              <td>Karen Correa</td>
            </tr>
            <tr>
              <td>Los otros ...</td>
            </tr>
          </tbody>
        </table>
        <h6>Proyecto 1101</h6>
      </header>
    </div>
  );
}

export default App;
