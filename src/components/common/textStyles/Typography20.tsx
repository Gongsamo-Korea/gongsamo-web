import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

export const Typography20: React.FC<TextProps> = ({
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
      type={type ?? 'h4'}
      text={text}
      color={color}
      weight={weight ?? 700}
      textSize={{
        desktop: '2rem',
        mobile: '2rem',
      }}
      lineHeight={{
        desktop: '2.8rem',
        mobile: '2.8rem',
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
      data-testid={`typography20`}
      {...HTMLParagraphElement}
    />
  );
};
