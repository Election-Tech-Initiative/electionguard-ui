import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders logo', () => {
    render(<App />);
    const logos = screen.getAllByText(/electionguard-logo.svg/i);
    const firstLogo = logos[0];
    expect(firstLogo).toBeInTheDocument();
});
