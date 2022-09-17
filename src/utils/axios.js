import axios from 'axios';

const customFetch=axios.create({
  baseURL:`http://restapi.adequateshop.com/api/`,
})

export default customFetch;