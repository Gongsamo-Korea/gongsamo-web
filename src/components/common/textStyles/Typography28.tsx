import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography28: React.FC<TextProps> = ({
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
      type={type ?? 'h2'}
      text={text}
      color={color}
      weight={weight ?? 700}
      textSize={{
        desktop: '2.8rem',
        mobile: '2.8rem',
      }}
      lineHeight={{
        desktop: '3.6rem',
        mobile: '3.6rem',
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
      data-testid={`slid-ips-title1`}
      {...HTMLParagraphElement}
    />
  );
};
