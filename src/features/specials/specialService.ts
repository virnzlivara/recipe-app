import axios from "axios";

const getSpecials = async (params?: any) => {  
    const response = await axios(`http://localhost:3001/specials`); 
    return response.data;
};


const specialService = {
    getSpecials
  };
  
export default specialService;