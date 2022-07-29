import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
			{pacientes && pacientes.length ? (
				<>
					<h2 className='font-black text-2xl text-center'>Listado pacientes</h2>
					<p className='text-lg mt-3 text-center mb-10'>
						Administra tus{' '}
						<span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
					</p>
					{pacientes.map(paciente => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h2 className='font-black text-2xl text-center'>No hay Pacientes</h2>
					<p className='text-lg mt-3 text-center mb-10'>
						Comienza agregando pacientes{' '}
						<span className='text-indigo-600 font-bold'>
							y lo tendras aquí.
						</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListadoPacientes;
