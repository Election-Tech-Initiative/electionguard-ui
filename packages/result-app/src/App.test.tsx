import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
    render(<App />);
    const h1Element = screen.getByText(/select election page/i);
    expect(h1Element).toBeInTheDocument();
});
