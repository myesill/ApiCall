
import ImageItem from './ImageItem';

function ImageList1({imagesPlaceHolder}) {
  return (
    <div className='imageList'>
      
      {
      imagesPlaceHolder.map((image, index)=>{
        return <ImageItem key={index} image={image}/>;
      })
      }
    </div>
  )
}

export default ImageList1;