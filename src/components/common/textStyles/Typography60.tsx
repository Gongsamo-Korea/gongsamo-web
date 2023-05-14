import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography60: React.FC<TextProps> = ({
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
        desktop: '6rem',
        mobile: '6rem',
      }}
      lineHeight={{
        desktop: '7rem',
        mobile: '7rem',
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
      data-testid={`typography60`}
      {...HTMLParagraphElement}
    />
  );
};
