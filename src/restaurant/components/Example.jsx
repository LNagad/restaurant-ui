import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { Circle } from '@mui/icons-material';
import moment from 'moment';

import { SaveModal } from './SaveModal';

export const Example = () => {
  const { restaurantData: { orders } } = useSelector((state) => state.restaurant);

  const data = orders?.result?.map((order) => {
    const createdFormat = moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return { ...order, createdFormat };
  });

  const [open, setOpen] = useState(false);
  const [orderFinded, setOrderFinded] = useState({});

  const handleToggle = () => setOpen(!open);

  const handleRowClick = (id) => {
    const orderById = data.find((order) => order.id === id);
    setOrderFinded(orderById);
    handleToggle();
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 300,
      },
      {
        accessorKey: 'subtotal',
        header: 'Subtotal',
        size: 300,
        Cell: ({ cell }) => {
          const subtotal = cell.getValue();
          return `$ ${subtotal}`;
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 300,
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
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) => {
            handleRowClick(row.original.id);
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
