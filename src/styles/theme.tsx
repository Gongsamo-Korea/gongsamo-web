export const defaultTheme = {
  COLORS: {
    GRAY9: '#212529',
    GRAY8: '#343A40',
    GRAY7: '#495057',
    GRAY6: '#868E96',
    GRAY5: '#CED4DA',
    GRAY4: '#DEE2E6',
    GRAY3: '#E9ECEF',
    GRAY2: '#F1F3F5',
    GRAY1: '#F8F9FA',
    GRAY0: '#FFFFFF',

    DARK_BLUE6: '293E59',
    DARK_BLUE5: '3B4F6F',
    DARK_BLUE4: '4D6085',
    DARK_BLUE3: '5E719B',
    DARK_BLUE2: '7083B1',
    DARK_BLUE1: '8295C7',

    BLUE6: '#334E95',
    BLUE5: '#4866AE',
    BLUE4: '#7391CF',
    BLUE3: '#94B2E6',
    BLUE2: '#BCD3F5',
    BLUE1: '#DDE8FA',

    YELLOW6: '#C99A2E',
    YELLOW5: '#EABD40',
    YELLOW4: '#F2D26F',
    YELLOW3: '#F7E18C',
    YELLOW2: '#FBEFB3',
    YELLOW1: '#FDF8DA',

    RED6: '#B63D50',
    RED5: '#D3545D',
    RED4: '#E4807E',
    RED3: '#F1A49A',
    RED2: '#FACABE',
    RED1: '#FBE7DE',

    GREEN6: '#23677A',
    GREEN5: '#308290',
    GREEN4: '#5EB5BC',
    GREEN3: '#85DEDC',
    GREEN2: '#B2F3ED',
    GREEN1: '#D8F8F3',
  },
  GRADIENT_COLOR: {
    LINEAR1: 'linear-gradient(270deg, #FDF8DA 15.24%, #FACABE 100%)',
    LINEAR2: 'linear-gradient(270deg, #D8F8F3 17.71%, #FDF8DA 100%)',
    LINEAR3: 'linear-gradient(270deg, #E2F1F8 0%, #FBE7DE 100%)',
    LINEAR4: 'linear-gradient(270deg, #DDE8FA 0%, #D8F8F3 100%)',
    LINEAR5: 'linear-gradient(270deg, #FACABE 0%, #D8F8F3 94.79%)',
    LINEAR6: 'linear-gradient(270deg, #C4E1EF 0%, #FDF8DA 100%)',
    LINEAR7: 'linear-gradient(270deg, #FACABE 0%, #BCD3F5 100%)',
    LINEAR8: 'linear-gradient(270deg, #BCD3F5 0%, #D8F8F3 100%)',
  },
  BOX_SHADOW: {
    SHADOW1: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    SHADOW2: '0px 8px 24px rgba(0, 0, 0, 0.1)',
    SHADOW3: '0px 12px 40px rgba(0, 0, 0, 0.1)',
  },
};

const Color = {
  light: defaultTheme,
  // TODO: add dark theme if needed
};

const mode = 'light';

export const colors = Color[mode];

export type ColorTheme = typeof defaultTheme;

const theme = {
  colors,
};

export default theme;
