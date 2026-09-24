// import { createContext, useContext } from "react";

// const ThemeContext = createContext();

// const theme = {
//   colors: {
//     background: "#FAF7F0",
//     section: "#F3EDE1",
//     surface: "#FFFFFF",

//     primary: "#B88A3B",
//     primaryLight: "#D6B46A",
//     primaryDark: "#8F682B",

//     text: "#29251F",
//     textSoft: "#6F685D",
//     textMuted: "#91897D",

//     border: "#E4D8C3",
//   },

//   gradients: {
//     page: "linear-gradient(135deg, #FAF7F0 0%, #F3EDE1 45%, #EDE2D0 100%)",

//     gold: "linear-gradient(135deg, #B88A3B, #D6B46A)",

//     soft: "linear-gradient(135deg, #FFFFFF, #F3EDE1)",

//     hero: "linear-gradient(135deg, #FAF7F0 0%, #F7F0E4 50%, #EDE2D0 100%)",
//   },
// };

// export const ThemeProvider = ({ children }) => {
//   return (
//     <ThemeContext.Provider value={theme}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext } from "react";

const ThemeContext = createContext();

const theme = {
  colors: {
    background: "#FAF7F0",
    section: "#EFE6D4",       // pulled darker for more contrast
    sectionAlt: "#F7F2E8",    // a second alternating tone
    surface: "#FFFFFF",

    primary: "#B88A3B",
    primaryLight: "#D6B46A",
    primaryDark: "#8F682B",

    text: "#29251F",
    textSoft: "#6F685D",
    textMuted: "#91897D",

    border: "#E4D8C3",
  },

  gradients: {
    page: "linear-gradient(135deg, #FAF7F0 0%, #F3EDE1 45%, #EDE2D0 100%)",
    gold: "linear-gradient(135deg, #B88A3B, #D6B46A)",
    soft: "linear-gradient(135deg, #FFFFFF, #F3EDE1)",
    hero: "linear-gradient(135deg, #FAF7F0 0%, #F7F0E4 50%, #EDE2D0 100%)",
  },

  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
    accent: "'Cormorant Garamond', serif",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "2.75rem",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);