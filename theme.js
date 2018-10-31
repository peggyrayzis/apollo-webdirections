import theme from 'mdx-deck/themes';
import Provider from './provider'

export const colors = { black: '#030019', white: '#fff', lightBlue: '#14CBC4', pink: '#fb00b0' };

export const fontSize = { small: '1em', medium: '2.2em', large: '3.4em' };

export default {
  ...theme,
  Provider,
  colors: {
    background: colors.white,
    text: colors.black,
  },
  h1: {
    color: colors.lightBlue,
    fontWeight: 800,
    fontSize: fontSize.large,
  },
  h2: {
    color: colors.black,
    fontWeight: 'normal',
    fontSize: fontSize.medium,
  },
  font: 'Heebo',
  ul: {
    margin: '20px',
  },
  li: {
    padding: '20px 0 20px 0',
    color: colors.lightBlue,
  },
  a: {
    color: colors.lightBlue,
    textDecoration: 'none',
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
