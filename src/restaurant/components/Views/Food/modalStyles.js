export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  boxShadow: 24,
  display: 'flex',
  flexWrap: 'wrap',
};

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const modalProps = {
  'aria-labelledby': 'transition-modal-title',
  'aria-describedby': 'transition-modal-description',
  disableAutoFocus: true,
  closeAfterTransition: true,
  slotProps: {
    backdrop: {
      timeout: 500,
    },
  },
};




export const customStyles = {
  control: base => ({
    ...base,
    height: '45.75px',
    minHeight: '45.75px'
  }),
  multiValue: (base, state) => ({
    ...base,
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    paddingLeft: '8px',
    marginRight: '4px',
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: '#333',
    fontWeight: 'normal',
  }),
  multiValueRemove: (base, state) => ({
    ...base,
    color: '#999',
    cursor: 'pointer',
    fontSize: '28px',
    width: '28px',
    display: 'flex', justifyContent: 'center',
    ':hover': {
      color: 'black',
      backgroundColor: 'rgba(255, 0, 0, 0.5)'
    },
  }),
};