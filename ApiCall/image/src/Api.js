import axios from 'axios';

const searchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers:{
         Authorization:'Client-ID SFPQmKY5yH4OWahZrtZflxz1lVFyfXBSGWBx1xIBJkk'
       },
       params:{
         query:term,
       }
     });
     debugger;
     return response.data.results;
   };
 

export default searchImages;