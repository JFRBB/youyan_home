import * as types from './actionType';


function addCount(data) {
  return (dispatch, getState) => {
    dispatch({type: types.Add, data:data});
  };
}

function changeLan(data) {
  return (dispatch, getState) => {
    dispatch({type: types.ChangeLan, data:data});
  };
}

function changeLogin(data) {
  return (dispatch, getState) => {
    dispatch({type: types.ChangeLogin, data:data});
  };
}



export default { addCount, changeLan };
