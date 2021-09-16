import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/loginPage';
import { Provider } from 'react-redux'
import configureStore from '../redux/store';

const store = configureStore()

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

describe('Login Page', () => {
  it('should render login button', async () => {
    render(<Provider store={store}><LoginPage /></Provider> );
    const loginButton = await screen.getByText(/Login/i);
    expect(loginButton).toBeVisible();
  });
  it('should render username field', async () => {
    render(<Provider store={store}><LoginPage /></Provider> );
    const username = await screen.getByText(/Username/i);
    expect(username).toBeVisible();
  });
  it('should render password field', async () => {
    render(<Provider store={store}><LoginPage /></Provider> );
    const password = await screen.getByText(/Password/i);
    expect(password).toBeVisible();
  });
});
