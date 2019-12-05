const axios = require("axios").default;
axios.get("http://192.168.31.23:3000/").then(res => console.log(res));
