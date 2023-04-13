import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { adminStore } from './app/adminStore';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={adminStore}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
