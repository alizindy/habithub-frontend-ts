'use client';

import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'campaign' | 'about'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'campaign':
        return <CampaignPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {/* AppBar for Navigation */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Habit Hub
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Menu */}
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <List>
          <ListItem onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem onClick={() => { setCurrentPage('campaign'); setIsMenuOpen(false); }}>
            <ListItemText primary="Campaign" />
          </ListItem>
          <ListItem onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>

      {/* Page Content */}
      <div style={{ marginTop: '64px' }}> {/* AppBar height offset */}
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
