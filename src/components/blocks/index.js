import Quote from './quote';
import Richtext from './richtext';
import Images from './images';
import ImageTextCombination from './image-text-combination';
import Vimeo from './video-vimeo';

const blocks = {
  WordPressAcf_quote: Quote,
  WordPressAcf_text: Richtext,
  WordPressAcf_imageTextCombination: ImageTextCombination,
  WordPressAcf_images: Images,
  WordPressAcf_vimeoVideo: Vimeo
};

export default blocks;
