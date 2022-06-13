const size = {
  xs: '480px',
  sm: '767px',
  md: '969px',
  lg: '1024px',
  xlg: '1280px',
  xxlg: '1440px',
};

export const media = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (max-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
