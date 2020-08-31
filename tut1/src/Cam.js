import Heading from './components/heading/heading.js';
import ImageCam from './components/image-1/image1.js';
import _ from 'lodash';
const heading= new Heading();
heading.render(_.upperFirst('cam'));

const imagecam=new ImageCam();
imagecam.render();