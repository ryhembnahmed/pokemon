const initState = {
  listItems: [],
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "Add":
      alert("Pokemon was added successfully!");
      return { ...state, listItems: [...state.listItems, action.payload] };
      case "Delete":
      alert("Pokemon was deleted !");
      return { ...state, listItems: state.listItems.filter((listItems, i)=> i!== action.payload) };
    default:
      return state;
  }
};
export default Reducer;
