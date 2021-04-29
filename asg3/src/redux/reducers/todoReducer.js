import { todoVar } from "../actionTypes";
const initialState = {
  todo: {
    title: "Todo",
    item: [
      {
        id:'0',
        text:'1st created'
    },
    {
        id:'1',
        text:'2st created'
    },
    {
        id:'2',
        text:'3st created'
    }
    ],
  },
  progress: {
    title: "In Progress",
    item: [
      {
        id:'3',
        text:'1st crea'
    },
    {
        id:'4',
        text:'2st crea'
    },
    {
        id:'5',
        text:'3st creahkjnl kj;loj;lk;k'
    }
    ],
  },
  done: {
    title: "Completed",
    item: [
      {
        id:'6',
        text:'1st crea'
    },
    {
        id:'7',
        text:'2st crea'
    },
    {
        id:'8',
        text:'3st crea'
    }
    ],
  },
};




const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todoVar.addItem:
      return {
        ...state,
        todo: { ...state.todo, item: [payload, ...state.todo.item] },
      };
    case todoVar.updateState:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default todoReducer;
