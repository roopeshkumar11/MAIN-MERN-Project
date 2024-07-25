// import axios from "axios";
// export const uploadfile=async(data)=>{
//     const API_URL="http://localhost:8000"
//     try{
//   let response= await axios.post(`${API_URL}/upload`,data);
//   return response.data;
//     }
//     catch(error){
//         console.log("error whlie calling the api",error.message)
//     }
// }

import axios from "axios";

const API_URL = "http://localhost:8000";

export const uploadfile = async (data) => {
  try {
    let response = await axios.post("http://localhost:8000/upload", data);
    return response.data;
  } catch (error) {
    console.log("Error while calling the API:", error.message);
    throw error; // Re-throw the error if you want it to be handled elsewhere
  }
};
