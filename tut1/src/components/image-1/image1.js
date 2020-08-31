import image1 from './image1.png';
import './image1.scss'

class ImageCam{
    render(){
        const img=document.createElement('img');
        img.src=image1;
        img.alt='Man-cam';
        img.classList.add('image-man');
        const bodyDomElement=document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}
export default ImageCam;