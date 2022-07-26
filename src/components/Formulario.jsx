const Formulario = () => {
	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='font-black text-2xl text-center'>Registro de Paciente</h2>
			<p className='text-lg mt-3 text-center mb-10'>
				Añade Pacientes y{' '}
				<span className='text-indigo-600 font-bold'>Administralos</span>
			</p>

			<form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				<div className='mb-4'>
					<label
						htmlFor='mascota'
						className='block text-gray-700 uppercase font-bold'
					>
						Nombre Mascota
					</label>
					<input
						autoComplete='off'
						type='text'
						id='mascota'
						name='mascota'
						placeholder='Nombre de la mascota'
						className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='propietario'
						className='block text-gray-700 uppercase font-bold'
					>
						Nombre Propietario
					</label>
					<input
						autoComplete='off'
						type='text'
						id='propietario'
						name='propietario'
						placeholder='Nombre del Propietario'
						className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 uppercase font-bold'
					>
						Correo
					</label>
					<input
						autoComplete='off'
						type='email'
						id='email'
						name='email'
						placeholder='Correo de contacto'
						className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='alta'
						className='block text-gray-700 uppercase font-bold'
					>
						Alta
					</label>
					<input
						autoComplete='off'
						type='date'
						id='alta'
						name='alta'
						className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='sintomas'
						className='block text-gray-700 uppercase font-bold'
					>
						Síntomas
					</label>
					<textarea
						name='sintomas'
						id='sintomas'
						placeholder='Describe los síntomas'
						className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-400'
					/>
				</div>

				<input
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
					value='Agregar Paciente'
				/>
			</form>
		</div>
	);
};

export default Formulario;
