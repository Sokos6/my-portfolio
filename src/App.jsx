import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
//Pages
import HomePage from './js/containers/pages/HomePage';
import AboutPage from './js/containers/pages/AboutPage';
import SkillsPage from './js/containers/pages/SkillsPage';
import ProjectsPage from './js/containers/pages/ProjectsPage';
import ContactsPage from './js/containers/pages/ContactsPage';
import NotFoundPage from './js/containers/pages/NotFoundPage';
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
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/skills" component={SkillsPage} />
			<Route path="/projects" component={ProjectsPage} />
			<Route path="/contacts" component={ContactsPage} />
			<Route path="*" component={NotFoundPage} />
		</Switch>
	</Suspense>
);

export default hot(App);
