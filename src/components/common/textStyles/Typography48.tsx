import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography48: React.FC<TextProps> = ({
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
        desktop: '4.8rem',
        mobile: '4.8rem',
      }}
      lineHeight={{
        desktop: '5.6rem',
        mobile: '5.6rem',
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
      data-testid={`slid-ips-huge-title2`}
      {...HTMLParagraphElement}
    />
  );
};
