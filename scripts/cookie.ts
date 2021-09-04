export const cookie = {
  set: (name: string, data: string) => {
    document.cookie = `${name}=${data};`;
  },
  get: (name: string) => {
    const get_cookie_split_array = document.cookie.split(";");
    console.log(get_cookie_split_array, "check_data");
  },
};
