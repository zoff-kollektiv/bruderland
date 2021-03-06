import Quote from './quote';
import Richtext from './richtext';
import Images from './images';
import ImageTextCombination from './image-text-combination';
import Vimeo from './video-vimeo';
import slogan from './slogan';
import logos from './logos';

const blocks = {
  WordPressAcf_quote: Quote,
  WordPressAcf_text: Richtext,
  WordPressAcf_imageTextCombination: ImageTextCombination,
  WordPressAcf_images: Images,
  WordPressAcf_logos: logos,
  WordPressAcf_slogan: slogan,
  WordPressAcf_vimeoVideo: Vimeo,
};

export default blocks;
