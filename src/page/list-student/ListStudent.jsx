
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useFetchStudentsQuery } from '../../feature/studentSlice';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 110,
    editable: true,
  },
];


export default function ListStudent() {

    const {data: students} = useFetchStudentsQuery();

    console.log(students)

  const rows = students && students.map((ariyibi)=>({
    id: ariyibi.id,
    first_name: ariyibi.first_name,
    last_name: ariyibi.last_name,
    gender: ariyibi.gender
  }))

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
