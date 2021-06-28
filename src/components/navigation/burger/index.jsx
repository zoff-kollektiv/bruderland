import React from 'react';

import BurgerIcon from '../../../static/burger.svg';
import CloseIcon from '../../../static/times.svg';
import VisuallyHidden from '../../visually-hidden';

import styles, { iconStyles } from './styles';

export default ({ isOpen, language, ...rest }) => (
  <a
    href={`${language === 'de' || !language ? '' : `/${language}`}/navigation`}
    {...rest}
  >
    <style jsx>{styles}</style>
    {iconStyles.styles}
    {!isOpen ? (
      <BurgerIcon className={iconStyles.className} />
    ) : (
      <CloseIcon className={iconStyles.className} />
    )}
    <VisuallyHidden>Toggle</VisuallyHidden>
    Menu
  </a>
);
