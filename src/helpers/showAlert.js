
import Swal from 'sweetalert2';

export const showAlert = ({title = 'default', text = 'default', icon = 'success' }) => {
  Swal.close();
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};
