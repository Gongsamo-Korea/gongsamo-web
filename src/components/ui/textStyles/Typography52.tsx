import React from 'react';
import { TextProps, TextStyle } from './TextStyle';

const Typography52: React.FC<TextProps> = ({
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
        desktop: '5.2rem',
        mobile: '5.2rem',
      }}
      lineHeight={{
        desktop: '6rem',
        mobile: '6rem',
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

export default Typography52;
