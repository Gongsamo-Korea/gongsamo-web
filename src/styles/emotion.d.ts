import '@emotion/react';
import { BreakpointType, ColorType, EffectType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    effects: EffectType;
    breakpoints: BreakpointType;
  }
}
