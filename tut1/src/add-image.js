import image1 from './image1.png';
function addImage(){
    const img=document.createElement('img');
    img.alt='image1';
    img.width=300;
    img.src=image1;
    const body=document.querySelector('body');
    body.appendChild(img);
}

export default addImage;