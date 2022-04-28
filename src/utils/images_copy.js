import axios from "axios";

const images = getImagesFromApi();

async function getImagesFromApi(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

  console.log(response.data);
  return response.data;
}


export default images;