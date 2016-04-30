import { ROUTE_CHANGE } from '../actions'

const routes = {

}

function routing(state = {path: '/', ctx: {path: '/', params: {}}}, action) {
  if (action.type == ROUTE_CHANGE) {
    return {
      ctx: action.ctx,
      path: action.path
    };
  } else return state;
}

export default routing
