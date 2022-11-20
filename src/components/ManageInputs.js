import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function ManageInputs({ handleGameChange, productChange, writeToDataBase, isEdit }) {
	const testImage = (url, timeout) =>
		new Promise((res) => {
			timeout = timeout || 5000;
			let timedOut = false;
			let timer;
			const img = new Image();

			img.onerror = img.onabort = function () {
				if (!timedOut) {
					clearTimeout(timer);
					res('error');
				}
			};

			img.onload = function () {
				if (!timedOut) {
					clearTimeout(timer);
					res('success');
				}
			};

			img.src = url;

			timer = setTimeout(function () {
				timedOut = true;
				// reset .src to invalid URL so it stops previous
				// loading, but doesn't trigger new load
				img.src = '//!!!!/test.jpg';
				res('timeout');
			}, timeout);
		});

	const schema = yup.object().shape({
		name: yup.string().required('Name is Required!'),
		curr_price: yup
			.number()
			.transform((value) => (isNaN(value) ? 0 : value))
			.positive('Price Must Be Positive!')
			.min(1, 'Price Must Be Atleast 1!')
			.integer('Price Must Be Integer!'),
		sale: yup.number().transform((value) => (isNaN(value) ? 0 : value)),
		img_url: yup
			.string()
			.test('valid-image-url', 'Must Use Valid Image URL!', (value) =>
				testImage(value, 1000).then((status) => status === 'success')
			),
		publisher: yup.string().required('Publisher is Required!'),
		relase_date: yup
			.number()
			.transform((value) => (isNaN(value) ? 0 : value))
			.test('is-decimal', 'Must Be 4 Digits', (value) => (value + '').match(/\d{4}/))
			.max(2023, 'Relase Date Must Be Below 2023')
	});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		reset(productChange);
	}, [productChange]);
	const onSubmit = (data) => {
		isEdit ? handleGameChange(data) : writeToDataBase(data);
	};

	return (
		<div className="manage-inputs">
			<h2 className="add-edit">{isEdit ? 'Editing game' : 'Adding game'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input type="text" name="name" {...register('name')} />
					<p>Name</p>
				</div>
				<p className="error">{errors.name?.message}</p>
				<div>
					<input type="number" name="curr_price" {...register('curr_price')} />
					<p>Current price</p>
				</div>
				<p className="error">{errors.curr_price?.message}</p>
				<div>
					<input type="number" name="sale" {...register('sale')} />
					<p>Sale (price before sale)</p>
				</div>
				<p className="error">{errors.sale?.message}</p>
				<div>
					<input type="text" name="img_url" {...register('img_url')} />
					<p>Card image</p>
				</div>
				<p className="error">{errors.img_url?.message}</p>
				<div>
					<input
						type="text"
						name="publisher"
						defaultValue={productChange?.publisher || ''}
						{...register('publisher')}
					/>
					<p>Publisher</p>
				</div>
				<p className="error">{errors.publisher?.message}</p>
				<div>
					<input
						type="number"
						name="relase_date"
						defaultValue={productChange?.relase_date || ''}
						{...register('relase_date')}
					/>
					<p>Relase date</p>
				</div>
				<p className="error">{errors.relase_date?.message}</p>
				{isEdit ? (
					<input type="submit" className="edit-btn" value="Edit"></input>
				) : (
					<input type="submit" className="submit-btn" value="Add"></input>
				)}
			</form>
		</div>
	);
}

export default ManageInputs;
