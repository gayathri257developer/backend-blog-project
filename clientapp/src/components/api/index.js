import axios from "axios";

const url = "https://backend-blog-project.herokuapp.com/api/home";

const fetchData = async () => {
try{
    const response = await axios.get(url);
    return response.data;
}
catch (error) {
  console.log(error);    
}
};
export default fetchData;