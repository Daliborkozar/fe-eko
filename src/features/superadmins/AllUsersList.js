import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeactivateIcon from "@mui/icons-material/Block";
import { useGetAllUsers } from "../../api/ekoApi";
import { useNavigate } from "react-router-dom";
import { TableTabs } from "../../components/TableTabs";
import { SearchInput } from "../../components/SearchInput";
import styled from "styled-components";

const TabAndSearchWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-right: 10px;
  align-items: center;
`;

const AllUsersList = () => {
  const { data, isLoading, isError } = useGetAllUsers();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    if (currentTab === 0) {
      navigate("/admintable");
    }
  }, [currentTab, navigate]);

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

  const columnDefsAdmins = [
    { field: "roles.User", headerName: "Role", flex: 1 },
    { field: "displayName", headerName: "Display Name", flex: 1 },
    { field: "username", headerName: "User Name", flex: 1 },
    { field: "email", headerName: "E-mail", flex: 1 },
    { field: "organization", headerName: "Organization", flex: 1 },
    { field: "isActive", headerName: "Active" },
    {
      headerName: "Actions",
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

  const rowData = data || [];

  return (
    <div>
       <TabAndSearchWrapper>
        <TableTabs currentTab={currentTab} handleTabChange={handleTabChange} />
        <SearchInput />
      </TabAndSearchWrapper>
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
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete{" "}
          {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Deactivate Modal */}
      <Dialog open={deactivateModalOpen} onClose={handleCloseDeactivateModal}>
        <DialogTitle>Deactivate Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to deactivate{" "}
          {selectedRowData && selectedRowData.username}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeactivateModal}>Cancel</Button>
          <Button onClick={handleConfirmDeactivate}>Deactivate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllUsersList;
