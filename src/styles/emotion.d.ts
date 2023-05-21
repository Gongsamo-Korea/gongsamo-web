import '@emotion/react';
import { ColorType, EffectType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    effects: EffectType;
  }
}
