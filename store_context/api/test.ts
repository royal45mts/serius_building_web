class redux {
  data() {
    return {
      user: false,
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "tr": {
        return { user: (state.user = true) };
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
