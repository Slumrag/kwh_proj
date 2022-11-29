import './styles/App.scss';
import DefaultLayout from './layouts/DefaultLayout';
import Form from './components/Form/Form';

function App() {
	return (
		<div className="App">
			<DefaultLayout>
				<Form action={'locallhost:3000'} method={'POST'}></Form>
			</DefaultLayout>
		</div>
	);
}

export default App;
