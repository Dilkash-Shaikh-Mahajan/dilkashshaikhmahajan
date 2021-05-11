import React, { useState, useEffect } from 'react';
import { getSingleFiles } from '../../api/index';
import PulseLoader from 'react-spinners/PulseLoader';
import { SRLWrapper } from 'simple-react-lightbox';

const Portfolio = () => {
	const [tag, setTag] = useState('all');

	const [loading, setLoading] = useState(true);

	const [singleFiles, setSingleFiles] = useState([]);

	useEffect(() => {
		getSingleFiles().then((fileslist) => {
			tag === 'all'
				? setSingleFiles(fileslist)
				: setSingleFiles(
						fileslist.filter((image) => image.filter === tag),
				  );

			setLoading(false);
		});
	}, [tag]);

	return (
		<div>
			<section id='portfolio' className='porfolio my-3 bg_primary'>
				<div className='container'>
					<div className='section-title text-center text-lg-left mb-2'>
						<h2>Portfolio</h2> <br />
						<p className='text-muted'>Here is some on my works.</p>
					</div>
					<div className='tags'>
						<TagButton
							name='all'
							tagActive={tag === 'all' ? true : false}
							handleSetTag={setTag}
						/>
						/
						<TagButton
							name='frontEnd'
							tagActive={tag === 'frontEnd' ? true : false}
							handleSetTag={setTag}
						/>
						/
						<TagButton
							name='backEnd'
							tagActive={tag === 'backEnd' ? true : false}
							handleSetTag={setTag}
						/>
						/
						<TagButton
							name='fullStack'
							tagActive={tag === 'fullStack' ? true : false}
							handleSetTag={setTag}
						/>
					</div>

					{loading ? (
						<PulseLoader
							//css={override}
							loading={loading}
							margin={2}
							size={15}
						/>
					) : (
						<SRLWrapper>
							<div className='row'>
								{singleFiles.length === 0 ? (
									<div>
										<p>No Record Found 👎</p>
									</div>
								) : (
									singleFiles.map((file, index) => (
										<div
											className='col-md-4 mb-3'
											key={index}>
											<a href={`${file.filePath}`}>
												<img
													src={`${file.filePath}`}
													className='img-fluid rounded shadow img-responsive'
													height='200'
													alt={`${file.fileName}`}
												/>
											</a>
											<h5 className='text-center mt-2 font-weight-bold portfolio_url'>
												<a
													target='_dilkash'
													href={file.fileUrl}>
													Visit Website
												</a>
											</h5>
										</div>
									))
								)}
							</div>
						</SRLWrapper>
					)}
				</div>
			</section>
		</div>
	);
};
const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button
			className={`tag ${tagActive ? 'active' : null}`}
			onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Portfolio;
