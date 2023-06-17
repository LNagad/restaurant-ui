
export const gridItemProps = {
  item: true,
  lg: 1,
  xs: 2,
  display: 'flex',
  alignItems: { xs: 'center' },
  mt: {xs: 2, lg: 0}
};
  
export const gridContainerProps = {
  item: true,
  lg: 8,
  xs: 10,
  flexWrap: { xs: 'wrap' },
  display: { xs: 'flex' },
  justifyContent: { xs: 'end', lg: 'start' },
  marginLeft: { lg: 1 },
};

export const timeTypographyProps = {
  textAlign: 'end',
  fontSize: 18,
  sx: { opacity: 0.7 },
};