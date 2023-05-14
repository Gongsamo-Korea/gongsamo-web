import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography34: React.FC<TextProps> = ({
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
      type={type ?? 'h1'}
      text={text}
      color={color}
      weight={weight ?? 700}
      textSize={{
        desktop: '3.4rem',
        mobile: '3.4rem',
      }}
      lineHeight={{
        desktop: '4.2rem',
        mobile: '4.2rem',
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
      data-testid={`slid-ips-large-title1`}
      {...HTMLParagraphElement}
    />
  );
};
