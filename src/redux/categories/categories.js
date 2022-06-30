const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const categoriesState = { categories: [], showState: false };
export const checkStatus = () => ({
  type: CHECK_STATUS,
  showState: false,
});

const checkReducer = (state = categoriesState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return { categories: ['Under construction...'] };
    default:
      return state;
  }
};

export default checkReducer;
