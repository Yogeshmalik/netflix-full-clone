import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// how to use
// instance.get('/foo-bar')
// it will complete the base url like https://api.themoviedb.org/3/foo-bar
