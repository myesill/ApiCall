import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './Api';
import { useState } from 'react';
import ImageList1 from './components/ImageList1'


function App() {
 const [images, setImages] = useState([])

  const handleSubmit = async(term)=>{
  const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
     <SearchHeader search={handleSubmit} />
     <ImageList1 imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
