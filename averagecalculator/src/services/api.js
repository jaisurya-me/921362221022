
import axios from 'axios';

const getToken = async () => {
    try {
      const data = {
        companyName: "PSNA college of Engineering",
	clientID: "8f023b3d-01a5-4a46-91e2-691f2afafda2",
	clientSecret: "NEaPVXlmTiIHYISU",
	ownerName: "JAISURYAVEL P M",
	ownerEmail: "jaisuryavel25@gmail.com",
	rollNo: "921362221022"
      };
      const response = await axios.post("http://20.244.56.144/test/primes", data);
      if (!response) throw new Error("No token found");
      return response.data.access_token;
    } catch (err) {
      throw err;
    }
  };
  


const BASE_URL = 'http://20.244.56.144/test/primes'; 

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching numbers:', error);
    return [];
  }
};

export { fetchNumbers };
