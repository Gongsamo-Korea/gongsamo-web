export const colors = {
  blue1: '#dde8fa',
  blue2: '#bcd3f5',
  blue3: '#94b2e6',
  blue4: '#7391cf',
  blue5: '#4866ae',
  blue6: '#334e95',

  darkBlue1: '#8295c7',
  darkBlue2: '#7083b1',
  darkBlue3: '#5e719b',
  darkBlue4: '#4d6085',
  darkBlue5: '#3b4f6f',
  darkBlue6: '#293e59',

  yellow1: '#fdf8da',
  yellow2: '#fbefb3',
  yellow3: '#f7e18c',
  yellow4: '#f2d26f',
  yellow5: '#eabd40',
  yellow6: '#c99a2e',

  red1: '#fbe7de',
  red2: '#fabfbf',
  red3: '#f1a49a',
  red4: '#e4807e',
  red5: '#d3545d',
  red6: '#b63d50',

  green1: '#d8f8f3',
  green2: '#b2f3ed',
  green3: '#85dedc',
  green4: '#5eb5bc',
  green5: '#308290',
  green6: '#23677a',

  white: '#ffffff',
  gray1: '#f8f9fa',
  gray2: '#f1f3f5',
  gray3: '#e9ecef',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
  gray9: '#212529',

  linear1: 'linear-gradient(270deg, #fdf8da 15.24%, #facabe 100%)',
  linear2: 'linear-gradient(270deg, #d8f8f3 17.71%, #fdf8da 100%)',
  linear3: 'linear-gradient(270deg, #e2f1f8 0%, #fbe7de 100%)',
  linear4: 'linear-gradient(270deg, #dde8fa 0%, #d8f8f3 100%)',
  linear5: 'linear-gradient(270deg, #facabe 0%, #d8f8f3 94.79%)',
  linear6: 'linear-gradient(270deg, #c4e1ef 0%, #fdf8da 100%)',
  linear7: 'linear-gradient(270deg, #facabe 0%, #bcd3f5 100%)',
  linear8: 'linear-gradient(270deg, #bcd3f5 0%, #d8f8f3 100%)',
};

const effects = {
  boxShadow1: '0 2px 8px rgba(0, 0, 0, 0.1)',
  boxShadow2: '0 8px 24px rgba(0, 0, 0, 0.1)',
  boxShadow3: '0 12px 40px rgba(0, 0, 0, 0.1)',
};

export type ColorType = typeof colors;
export type EffectType = typeof effects;

const theme = {
  colors,
  effects,
};

export default theme;
