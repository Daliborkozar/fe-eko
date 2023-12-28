import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeactivateIcon from '@mui/icons-material/Block';
import { useGetAdminsQuery } from "./adminApiSlice";



const AdminList = () => {
    const {
        data,
        isLoading,
        // isSuccess,
        isError,
        // error
    } = useGetAdminsQuery()
    const [currentTab, setCurrentTab] = useState(0);
    console.log(data)
  //const { data, isLoading, isError } = useQuery(['adminData'], fetchAdminData);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

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
    { field: 'displayName', headerName: 'Display Name', flex: 1},
    { field: "username", headerName: 'User Name', flex: 1},
    { field: "email", headerName: 'E-mail', flex: 1},
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
      <Tabs value={currentTab} onChange={handleTabChange} >
        <Tab label="All Admins" />
        <Tab label="All Users" />
      </Tabs>
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
