import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Login from '../components/Login';

test('renders login form', () => {
    render(<Provider store={store}><Login /></Provider>);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('allows the user to log in', async () => {
    render(<Provider store={store}><Login /></Provider>);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpass' } });
    fireEvent.click(screen.getByText(/login/i));
    // Add assertions to check for successful login behavior
});