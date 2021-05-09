import axios from 'axios';

import { toast } from 'react-toastify';
const apiUrl = 'https://dilkashshaikhmahajan.herokuapp.com/api/';

export const singleFileUpload = async (data) => {
	await axios
		.post(apiUrl + 'singleFile', data)
		.then((response) => {
			let confirm = response.data;
			reacttoast(confirm);
		})
		.catch((error) => {
			console.log(error.response);
		});
};
const reacttoast = (confirm) => {
	toast.success(`${confirm} `, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

export const getSingleFiles = async () => {
	try {
		const { data } = await axios.get(apiUrl + 'getSingleFiles');
		return data;
	} catch (error) {
		throw error;
	}
};
export const sendMail = async (data) => {
	try {
		await axios.post(`${apiUrl}contact`, data);
	} catch (error) {
		throw error;
	}
};
