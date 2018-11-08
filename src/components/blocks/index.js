import Quote from './quote';
import Richtext from './richtext';
import Images from './images';
import ImageTextCombination from './image-text-combination';

const blocks = {
  WordPressAcf_quote: Quote,
  WordPressAcf_text: Richtext,
  WordPressAcf_imageTextCombination: ImageTextCombination,
  WordPressAcf_images: Images
};

export default blocks;
