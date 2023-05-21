import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

const Typography15: React.FC<TextProps> = ({
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
        desktop: '1.5rem',
        mobile: '1.5rem',
      }}
      lineHeight={{
        desktop: '2.3rem',
        mobile: '2.3rem',
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
      data-testid={`typography15`}
      {...HTMLParagraphElement}
    />
  );
};

export default Typography15;
