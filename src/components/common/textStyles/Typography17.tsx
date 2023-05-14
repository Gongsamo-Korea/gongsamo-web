import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography17: React.FC<TextProps> = ({
  type,
  text,
  color,
  weight,
  marginTop,
  opacity,
  textAlign,
  className,
  variants,
  initial,
  animate,
  ...HTMLParagraphElement
}) => {
  return (
    <TextStyle
      type={type ?? 'p'}
      text={text}
      color={color}
      weight={weight ?? 400}
      textSize={{
        desktop: '1.7rem',
        mobile: '1.7rem',
      }}
      lineHeight={{
        desktop: '2.6rem',
        mobile: '2.6rem',
      }}
      letterSpacing={{
        desktop: '0rem',
        mobile: '0rem',
      }}
      marginTop={marginTop}
      opacity={opacity}
      textAlign={textAlign}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      data-testid={`typography17`}
      {...HTMLParagraphElement}
    />
  );
};
