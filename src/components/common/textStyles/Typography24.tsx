import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography24: React.FC<TextProps> = ({
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
      type={type ?? 'h3'}
      text={text}
      color={color}
      weight={weight ?? 700}
      textSize={{
        desktop: '2.4rem',
        mobile: '2.4rem',
      }}
      lineHeight={{
        desktop: '3.1rem',
        mobile: '3.1rem',
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
      data-testid={`slid-ips-title2`}
      {...HTMLParagraphElement}
    />
  );
};
