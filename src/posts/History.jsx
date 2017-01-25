import React from 'react';
import { ActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    {canUndo && (<button onClick={onUndo}>Undo</button>)}
    {/* {canRedo && (<button onClick={onRedo}>Redo</button>)} */}
  </p>
);

const mapStateToProps = (state) => {
  return {
    canUndo: state.posts.past.length > 0,
    canRedo: state.posts.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
