export default (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': //en caso de que sea verdadero
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default: // en caso de que no se cumpla la condición
      return state;
  }
};
