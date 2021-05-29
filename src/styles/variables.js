export const palette = {
  primary: '#4059ad',
  secondary: '#6b9ac4',
  third: '#97d8c4',
  background: '#eff2f1',
  complement: '#f4b942',
  text: {
    primary: '#212121',
  }
}

export const typography = {
  heading: "'Montserrat', helvetica, arial, sans-serif",
  subheading: "Cabin, Lora, Georgia, times, serif",
  normal: "'Hind Madurai', helvetica, arial, sans-serif",
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};