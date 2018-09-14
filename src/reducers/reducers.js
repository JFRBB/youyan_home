import { combineReducers } from 'redux';
import lanData from '../common/config_lan';

const initData = {
  count: 1,
  language: "zh",
  lanData: lanData,
  isLogin: true,
}

function mainReducer(state = initData, action) {
  switch (action.type) {
    case "Add": {
      return {
        ...state,
        count: action.data
      }
    }
    case "ChangeLan": {
      return {
        ...state,
        language: action.data
      }
    }
    case "ChangeLogin": {
      return {
        ...state,
        isLogin: action.data
      }
    }
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  mainReducer
});

export default rootReducer;
