import React from "react";
import { Row, Col } from "./ui";
import { connect } from "react-redux";
import store from "./store";
import * as actions from "./actions";
function App(props) {
  // console.log(props);
  const { count, onIncrease, onDecrease, onAyncIncrease } = props;

  return (
    <div className="App">
      <Col top={100}>
        <Row>Count: {count}</Row>
        <Row top={16}>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
          <button onClick={onAyncIncrease}>aync +</button>
        </Row>
      </Col>
    </div>
  );
}
const mapStateProps = state => ({
  ...state.app
});
export default connect(mapStateProps, actions)(App);
