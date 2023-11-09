import Caneca from "./components/Caneca";
import { Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <Row>
          <Col className="custom-border">
            <h2>TrashMinator</h2>
            <h3>Colegio Bilingüe Jose Allamano</h3>
            <p>Recicla para el futuro</p>
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
              <td>Santiago Abril</td>
            </tr>
            <tr>
              <td>Gabriela Chavez</td>
            </tr>
            <tr>
              <td>Karen Correa</td>
            </tr>
            <tr>
              <td>Samuel Franco</td>
            </tr>
            <tr>
              <td>Angelica Riojas</td>
            </tr>
            <tr>
              <td>Ethan Tejero</td>
            </tr>
            <tr>
              <td>Iván Vanegas</td>
            </tr>
          </tbody>
        </table>
        <h6>Proyecto 1101</h6>
      </header>
    </div>
  );
}

export default App;
