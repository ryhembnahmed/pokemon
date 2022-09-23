export const addAction = (pokemone) => {
  return { type: "Add", payload: pokemone };
};
export const deleteAction = (id) => {
  return { type: "Delete", payload: id };
};
