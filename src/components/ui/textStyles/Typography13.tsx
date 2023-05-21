import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

const Typography13: React.FC<TextProps> = ({
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
        desktop: '1.3rem',
        mobile: '1.3rem',
      }}
      lineHeight={{
        desktop: '1.8rem',
        mobile: '1.8rem',
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
      data-testid={`typography13`}
      {...HTMLParagraphElement}
    />
  );
};

export default Typography13;
