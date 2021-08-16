const reduces = (state: number = 1, action: any) => {
  switch (action.type) {
    case "testredux_two/two": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
};
export default reduces;
