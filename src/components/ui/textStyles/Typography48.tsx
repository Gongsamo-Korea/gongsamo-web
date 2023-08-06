import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

const Typography48: React.FC<TextProps> = ({
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
        mobile: '2.4rem',
      }}
      lineHeight={{
        desktop: '5.6rem',
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
      data-testid={`typography48`}
      {...HTMLParagraphElement}
    />
  );
};

export default Typography48;
