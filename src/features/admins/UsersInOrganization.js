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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import DeactivateIcon from "@mui/icons-material/Block";
import { useGetOrgUsers } from "../../api/ekoApi";
import { useSelector } from "react-redux";

const UsersInOrganization = () => {
  const auth = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetOrgUsers();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

console.log(data, ' data users doktors')

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

  const columnDefsAdmins = [
    { field: "roles.User", headerName: t('role'), flex: 1 },
    { field: "displayName", headerName: t('displayName'), flex: 1 },
    { field: "username", headerName: t('userName'), flex: 1 },
    { field: "email", headerName: t('emailLabel'), flex: 1 },
    { field: "organization", headerName: t('organization'), flex: 1 },
    { field: "isActive", headerName: t('active') },
    { field: "_id", hide: true },
    {
      headerName: t("actions"),
      cellRenderer: (params) => (
        <>
          <DeleteIcon
            onClick={() => handleDelete(params.data)}
            style={{ cursor: "pointer" }}
          />
          <DeactivateIcon
            onClick={() => handleDeactivate(params.data)}
            style={{ cursor: "pointer" }}
          />
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

  const rowData = data.users || [];

  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefsAdmins}
        ></AgGridReact>
      </div>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <DialogTitle>{t('deleteConfirmation')}</DialogTitle>
        <DialogContent>
          {t('areYouSureToDelete')}{" "}
          {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>{t('cancel')}</Button>
          <Button onClick={handleConfirmDelete} color="error">
            {t('delete')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Deactivate Modal */}
      <Dialog open={deactivateModalOpen} onClose={handleCloseDeactivateModal}>
        <DialogTitle>{t('deactivateConfirmation')}</DialogTitle>
        <DialogContent>
          {t('areYouSureDeactivate')}{" "}
          {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeactivateModal}>{t('cancel')}</Button>
          <Button onClick={handleConfirmDeactivate}>{t('deactivate')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UsersInOrganization;
