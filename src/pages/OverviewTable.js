import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {axiosAuth} from '../api/axios';
import DeleteIcon from '@mui/icons-material/Delete';
import DeactivateIcon from '@mui/icons-material/Block';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const fetchAdminData = async () => {
  const response = await axiosAuth.get('/admin');
  console.log(response);
  return response.data; // Assuming the response structure is JSON
};

const OverviewTable = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useQuery(['adminData'], fetchAdminData);
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

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '80vh', width: '100%' }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <DialogTitle>{t('deleteConfirmation')}</DialogTitle>
        <DialogContent>
          {t('areYouSureToDeleteUser')} {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>{t('cancel')}</Button>
          <Button onClick={handleConfirmDelete} color="error">{t('delete')}</Button>
        </DialogActions>
      </Dialog>

      {/* Deactivate Modal */}
      <Dialog open={deactivateModalOpen} onClose={handleCloseDeactivateModal}>
        <DialogTitle>{t('deactivateConfirmation')}</DialogTitle>
        <DialogContent>
          {t('areYouSureDeactivate')} {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeactivateModal}>{t('cancel')}</Button>
          <Button onClick={handleConfirmDeactivate}>{t('deactivate')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OverviewTable;
