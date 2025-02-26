'use client';

import React, { useEffect, useState } from 'react';
import { viewModuleFunction } from '../lib/view_get_all_campaign';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

const CampaignPage: React.FC = () => {
    const [campaignData, setCampaignData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCampaignData = async () => {
            const data = await viewModuleFunction();  // Call the function to get campaign data
            setCampaignData(data?.length > 0 ? data[0] : []);
            setLoading(false);
        };
        fetchCampaignData();
    }, []);

    useEffect(() => {
        console.log(campaignData);
    }, [campaignData]);

    // Columns definition for DataGrid
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Campaign Name', width: 250 },
        { field: 'max_participant', headerName: 'Max Participants', width: 200 },
        { field: 'reward_per_submit', headerName: 'Reward/Submit', width: 200 },
        { field: 'reward_pool', headerName: 'Reward Pool', width: 200 },
    ];

    // Rows: Mapping the campaignData to the format required by DataGrid
    const rows = campaignData.map((campaign: any, index: number) => ({
        id: campaign.id || index,  // Ensure each row has a unique `id`
        name: campaign.name,
        max_participant: campaign.max_participant,  // Assuming this field exists in the data
        reward_per_submit: campaign.reward_per_submit,  // Assuming this field exists in the data
        reward_pool: campaign.reward_pool,  // Assuming this field exists in the data
    }));

    // Detect if the user prefers dark mode
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // Create a theme based on the user's dark mode preference
    const theme = createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',  // Switch based on the user's preference
            primary: {
                main: '#1976d2',  // Custom primary color
            },
            background: {
                default: prefersDarkMode ? '#121212' : '#fafafa',
                paper: prefersDarkMode ? '#1c1c1c' : '#ffffff',
            },
            text: {
                primary: prefersDarkMode ? '#ffffff' : '#000000',  // Adjust text color based on dark mode
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>Campaign Data</h1>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <CircularProgress />
                    </Box>
                ) : (
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns}/>
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
};

export default CampaignPage;
