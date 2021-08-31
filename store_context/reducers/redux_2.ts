class redux {
  data() {
    return {
      number: false,
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "test": {
        return { user: true };
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
