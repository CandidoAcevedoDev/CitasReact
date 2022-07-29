import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const pets = JSON.parse(localStorage.getItem('pacientes')) ?? [];
		setPacientes(pets);
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminarPaciente = id => {
		const pacienteActualizados = pacientes.filter(
			paciente => paciente.id !== id
		);

		setPacientes(pacienteActualizados);
	};

	return (
		<div className='container mx-auto mt-10'>
			<Header />
			<div className='mt-12 md:flex'>
				<Formulario
					pacientes={pacientes}
					paciente={paciente}
					setPaciente={setPaciente}
					setPacientes={setPacientes}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
