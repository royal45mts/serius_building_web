export const di2 = (amound: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "testredux_two/two",
      payload: amound,
    });
  };
};
