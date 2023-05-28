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
  tags?: string[];
  title: string;
  subtitle?: string;
  date?: string;
  author?: string;
  contents?: string;
  link?: string;
}
