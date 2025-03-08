import '@testing-library/jest-dom';
import React from 'react';

// Mock Framer Motion globally
jest.mock('framer-motion', () => {
    return {
        motion: {
            div: jest.fn(({ children }: { children: React.ReactNode }) => React.createElement('div', null, children)),
        },
    };
});
