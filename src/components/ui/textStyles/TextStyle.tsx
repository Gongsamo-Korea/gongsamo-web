import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: string;
  text: string;
  weight?: 400 | 700;
  marginTop?: string;
  opacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  variants?: any;
  initial?: string;
  animate?: string;
}

export interface TextStyleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type: any;
  text: string;
  weight: number;
  textSize: {
    desktop: string;
    mobile: string;
  };
  lineHeight?: {
    desktop: string;
    mobile: string;
  };
  letterSpacing?: {
    desktop: string;
    mobile: string;
  };
  marginTop?: string;
  opacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  variants?: any;
  initial?: string;
  animate?: string;
}

export const TextStyle: React.FC<TextStyleProps> = ({
  type,
  text,
  color,
  weight,
  textSize,
  lineHeight,
  letterSpacing,
  marginTop,
  opacity,
  textAlign,
  className,
  variants,
  initial,
  animate,
  ...HTMLParagraphElement
}) => {
  if (!variants) {
    return (
      <>
        <Text
          as={type}
          color={color}
          weight={weight}
          desktopFontSize={textSize.desktop}
          mobileFontSize={textSize.mobile}
          desktopLineHeight={lineHeight?.desktop}
          mobileLineHeight={lineHeight?.mobile}
          desktopLetterSpacing={letterSpacing?.desktop}
          mobileLetterSpacing={letterSpacing?.mobile}
          marginTop={marginTop}
          opacity={opacity}
          textAlign={textAlign}
          className={className}
          data-testid={`slid-ips-text`}
          {...HTMLParagraphElement}
        >
          {text}
        </Text>
      </>
    );
  } else {
    return (
      <>
        <motion.div variants={variants} initial={initial} animate={animate}>
          <Text
            as={type}
            color={color}
            weight={weight}
            desktopFontSize={textSize.desktop}
            mobileFontSize={textSize.mobile}
            desktopLineHeight={lineHeight?.desktop}
            mobileLineHeight={lineHeight?.mobile}
            desktopLetterSpacing={letterSpacing?.desktop}
            mobileLetterSpacing={letterSpacing?.mobile}
            marginTop={marginTop}
            opacity={opacity}
            textAlign={textAlign}
            className={className}
            data-testid={`slid-ips-text`}
            {...HTMLParagraphElement}
          >
            {text}
          </Text>
        </motion.div>
      </>
    );
  }
};

interface TextStyledComponentsProps extends React.HTMLAttributes<HTMLParagraphElement> {
  weight: number;
  desktopFontSize: string;
  mobileFontSize: string;
  desktopLineHeight?: string;
  mobileLineHeight?: string;
  desktopLetterSpacing?: string;
  mobileLetterSpacing?: string;
  marginTop?: string;
  opacity?: number;
  textAlign?: 'left' | 'center' | 'right';
}

const Text = styled.p<TextStyledComponentsProps>`
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  //
  font-size: ${({ desktopFontSize }) => desktopFontSize};
  line-height: ${({ desktopLineHeight }) => desktopLineHeight};
  letter-spacing: ${({ desktopLetterSpacing }) => desktopLetterSpacing};
  //
  margin-top: ${({ marginTop }) => marginTop};
  padding: 0;
  //
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: var(--max-width)) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    letter-spacing: ${({ mobileLetterSpacing }) => mobileLetterSpacing};
  }
`;
