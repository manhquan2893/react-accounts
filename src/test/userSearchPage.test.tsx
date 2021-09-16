import { render, screen } from '@testing-library/react';
import UserSearchPage from '../pages/userSearch';
import { Provider } from 'react-redux'
import configureStore from '../redux/store';

const store = configureStore()

test('User Search Page', () => {
    render(<Provider store={store}><UserSearchPage /></Provider> );
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
});
