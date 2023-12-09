import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import DeleteIcon from '@mui/icons-material/Delete';
import DeactivateIcon from '@mui/icons-material/Block';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useGetAdminsQuery } from "./adminApiSlice";



const AdminList = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAdminsQuery()

    console.log(data)
  //const { data, isLoading, isError } = useQuery(['adminData'], fetchAdminData);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  
  const handleDelete = (rowData) => {
    setDeleteModalOpen(true);
    setSelectedRowData(rowData);
  };

  const handleDeactivate = (rowData) => {
    setDeactivateModalOpen(true);
    setSelectedRowData(rowData);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedRowData(null);
  };

  const handleCloseDeactivateModal = () => {
    setDeactivateModalOpen(false);
    setSelectedRowData(null);
  };

  const handleConfirmDelete = () => {
    // Add logic for actual delete operation using selectedRowData
    console.log("Delete confirmed for:", selectedRowData);
    handleCloseDeleteModal();
  };

  const handleConfirmDeactivate = () => {
    // Add logic for actual deactivate operation using selectedRowData
    console.log("Deactivate confirmed for:", selectedRowData);
    handleCloseDeactivateModal();
  };

  const columnDefs = [
    { field: "roles.Admin", headerName: 'Role', flex: 1 },
    { field: "username", headerName: 'User Name', flex: 1},
    { field: "organization" , headerName: 'Organization', flex: 1},
    { field: "isActive", headerName: 'Active' },
    { 
      headerName: 'Actions',
      cellRenderer: params => (
        <>
          <DeleteIcon onClick={() => handleDelete(params.data)} style={{ cursor: 'pointer' }} />
          <DeactivateIcon onClick={() => handleDeactivate(params.data)} style={{ cursor: 'pointer' }} />
        </>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading admin data: {isError.message}</div>;
  }

  const rowData = data || [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '80vh', width: '100%' }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Deactivate Modal */}
      <Dialog open={deactivateModalOpen} onClose={handleCloseDeactivateModal}>
        <DialogTitle>Deactivate Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to deactivate {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeactivateModal}>Cancel</Button>
          <Button onClick={handleConfirmDeactivate}>Deactivate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminList;
