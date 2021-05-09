import React, { useState } from 'react';
import { singleFileUpload } from '../api/index';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookie from 'js-cookie';
const UploadProject = () => {
	const history = useHistory();
	if (!Cookie.get('jwt')) {
		history.push('/login');
	}
	const [title, setTitle] = useState('');
	const [imageName, SetImageName] = useState('');
	const [filter, setFilter] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();

		const sendFormData = new FormData();
		sendFormData.append('file', imageName);
		sendFormData.append('title', title);
		sendFormData.append('filter', filter);

		await singleFileUpload(sendFormData);

		setFilter('');
		setTitle('');
		SetImageName('');
	};

	return (
		<>
			<div className='container'>
				<div className='card shadow my-5 py-5 '>
					<form
						className='px-5 my-4 col-md-8 mx-auto'
						autoComplete='off'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Project Url'
								value={title}
								required={true}
								onChange={(e) => setTitle(e.target.value)}
								className='form-control'
							/>
						</div>
						<div className='custom-file form-group mb-3'>
							<input
								type='file'
								className='custom-file-input'
								onChange={(e) =>
									SetImageName(e.target.files[0])
								}
							/>
							<label
								className='custom-file-label'
								htmlFor='customFile'>
								Choose file
							</label>
						</div>

						<select
							className='custom-select form-group'
							value={filter}
							onChange={(e) => setFilter(e.target.value)}>
							<option defaultValue='filterImages'>
								Filter The Image
							</option>
							<option value='fullStack'>Full Stack </option>
							<option value='frontEnd'>FrontEnd</option>
							<option value='backEnd'>BackEnd</option>
						</select>
						<button
							type='submit'
							onClick={handleSubmit}
							className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default UploadProject;
