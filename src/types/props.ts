import { ColorType } from '@/styles/theme';
import { Theme } from '@emotion/react';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface ContentCardProps {
  backgroundColor?: string;
  color?: string;
  tags?: any;
  title: string;
  subtitle?: string;
  date?: string;
  author?: string;
  contents?: string;
  link?: string;
  openInNewTab?: boolean;
  thumbnail?: string;
}

export interface TitleBoxProps {
  title: string;
  description?: string;
  backgroundColor?: string;
}
