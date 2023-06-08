import { ApolloProvider } from '@apollo/client';
import client from '@config/apollo';
import ThemeContextProvider from '@context/ThemeContext';
import TranslationContextProvider from '@context/TranslationContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<TranslationContextProvider>
					<ThemeContextProvider>
						<App />
					</ThemeContextProvider>
				</TranslationContextProvider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
