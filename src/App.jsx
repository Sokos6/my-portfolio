import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
//components
import LoadingIndicator from './js/components/UI/LoadingIndicator';
const AppHeader = lazy(() => import('./js/containers/navigation/AppHeader'));

const App = () => (
	<Suspense
		fallback={
			<div className="loader-wrapper">
				<LoadingIndicator />
			</div>
		}
	>
		<AppHeader />
	</Suspense>
);

export default hot(App);
