const axios = require('axios');

const client =  {
  async get(url, params) {
    try {
      const response = await axios({
        method: 'get',
        url: url,
        params: (params) ? params : null
      });

      return response
    } catch (error) {
      return error
    }
  },
  async post(url, params, body) {
    try {
      const response = await axios({
        method: 'post',
        url: url,
        params: (params) ? params : null,
        body: (body) ? body : null
      });

      return response
    } catch (error) {
      return error
    }
  }
}

export default client
