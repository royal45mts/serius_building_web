class redux {
  data() {
    return {
      number: 0,
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "plus": {
        return { number: state.number + 1 };
      }
      case "minus": {
        return { number: state.number - 1 };
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
