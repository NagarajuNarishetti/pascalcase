export const colorTokens = {
  brand: {
    primary: '#2b6777',
    primaryForeground: '#ffffff',
    muted: '#c8d8e4',
    mutedForeground: '#2b6777',
  },
};

export const radiusTokens = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};

export type ThemeTokens = {
  colors: typeof colorTokens;
  radii: typeof radiusTokens;
};

export const themeTokens: ThemeTokens = {
  colors: colorTokens,
  radii: radiusTokens,
};
