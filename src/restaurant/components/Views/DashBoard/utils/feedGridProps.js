
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
  flexDirection: 'column',
  justifyContent: { xs: 'end', lg: 'start' },
  marginLeft: 2,
};

export const timeTypographyProps = {
  textAlign: 'end',
  mt: {xs: 2, md: 1, lg: 0},
  fontSize: { xs: 15, lg: 16},
  sx: { opacity: 0.7 },
};