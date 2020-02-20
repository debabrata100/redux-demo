import React from "react";
import { Row, Col } from "./ui";
import { connect } from "react-redux";
import store from "./store";
import * as actions from "./actions";
function App(props) {
  // console.log(props);
  const { count, onIncrease, onDecrease, onAyncIncrease } = props;
  let timeoutId;
  const onChangeInput = e => {
    let value = e.target.value;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(async () => {
      const response = await fetch(
        "http://www.mocky.io/v2/5e4e316b2f0000670016a43e"
      );
      response.json().then(res => {
        console.log("Api called for", value, res);
      });
    }, 500);
  };
  return (
    <div className="App">
      <Col top={100}>
        <Row>Count: {count}</Row>
        <Row top={16}>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
          <button onClick={onAyncIncrease}>aync +</button>
        </Row>

        <Col top={100}>
          <h1>Debounce Examle:</h1>
          <input placeholder="Type Here..." onKeyPress={onChangeInput} />
        </Col>
      </Col>
    </div>
  );
}
const mapStateProps = state => ({
  ...state.app
});
export default connect(mapStateProps, actions)(App);
