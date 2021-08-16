const reduces = (state: number = 1, action: any) => {
  switch (action.type) {
    case "test": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
};
export default reduces;
