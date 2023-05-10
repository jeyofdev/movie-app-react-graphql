import { ApolloProvider } from '@apollo/client';
import client from '@config/apollo';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import theme from './theme/globalTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme} />
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
