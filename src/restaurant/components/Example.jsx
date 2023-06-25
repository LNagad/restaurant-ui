import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { Circle } from '@mui/icons-material';
import moment from 'moment';

import { SaveModal } from './Views/Orders/SaveModal';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { loadEditData, startDeletingOrder, toggleEditModal } from '../../store';
import { showAlert } from '../../helpers';


export const Example = () => {
  const dispatch = useDispatch();
  
  const { token } = useSelector((state) => state.auth);

  const { restaurantData: { orders } } = useSelector((state) => state.restaurant);
  
  const data = orders?.result?.map((order) => {
    const createdFormat = moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return { ...order, createdFormat };
  });
  
  const cellSize = 200;
  const [open, setOpen] = useState(false);
  const [orderFinded, setOrderFinded] = useState({});

  const handleToggle = () => setOpen(!open);

  const handleRowClick = (id) => {
    const orderById = data.find((order) => order.id === id);
    setOrderFinded(orderById);
    handleToggle();
  };

  const onEditClick = (item) => {
    dispatch( loadEditData(item) );
    dispatch( toggleEditModal() );
  };

  const onDeleteClick = async( item ) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startDeletingOrder(item.id, token) ).then(resp => {
          if (resp) {
            showAlert({ title: 'Deleted!', text: `The order #${item.id} has been deleted`,});
          } else {
            showAlert({ title: 'Error!', text: 'Please Connect with your administrator', icon: 'error'});
          }
        });
      }
    });

  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: cellSize,
      },
      {
        accessorKey: 'subtotal',
        header: 'Subtotal',
        size: cellSize,
        Cell: ({ cell }) => {
          const subtotal = cell.getValue();
          return `$ ${subtotal}`;
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: cellSize,
        Cell: ({ cell }) => {
          const status = cell.getValue();
          const colorStatus = status === 'En proceso' ? 'orderInProgress' : 'orderFinished';

          return (
            <>
              <Circle sx={{ fontSize: 18, marginRight: 1, mb: 0.5 }} color={colorStatus} />
              {status}
            </>
          );
        },
      },
      {
        accessorKey: 'createdFormat',
        header: 'Created At',
        size: 300,
      },
      {
        
        header: 'Action',
        size: cellSize,
        Cell: ({ cell: {row : {original} } }) => {
          
          return (
            <>
              <Button onClick={(event) => {
                event.stopPropagation(); // Detener la propagación del evento
                onEditClick(original);
              }}>
                <Edit color='success' />
              </Button>
              <Button onClick={(event) => {
                event.stopPropagation(); // Detener la propagación del evento
                onDeleteClick(original);
              }}>
                <Delete color='error' />
              </Button>
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        muiTableBodyRowProps={({ row, onClick }) => ({
          onClick: (event) => {
            handleRowClick(row.original.id);
            // onClick(event); // Ejecutar el evento onClick del row
          },
          sx: {
            cursor: 'pointer',
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            fontWeight: 'bold',
            fontSize: '20px',
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            fontWeight: 'normal',
            fontSize: '18px',
          },
        }}
        enableColumnResizing
      />
      <SaveModal open={open} handleToggle={handleToggle} data={orderFinded} />
    </>
  );
};
