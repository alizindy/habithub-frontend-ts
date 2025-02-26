'use client';

import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page!</h1>
        </div>
    );
};

// Inline styles for centering the content with correct type
const styles: { container: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',  // Horizontally center the content
        alignItems: 'center',      // Vertically center the content
        height: '100vh',           // Take full viewport height
        textAlign: 'center',       // Center the text
    },
};

export default HomePage;
