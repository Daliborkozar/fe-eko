import { Tab, Tabs } from '@mui/material'
import React from 'react'

function TableTabs({ currentTab, handleTabChange }) {
  return (
    <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab label="All Admins" />
        <Tab label="All Users" />
      </Tabs>
  )
}

export { TableTabs }