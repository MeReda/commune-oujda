import { Link } from 'react-router-dom';
import Azzaoui from '/imgs/Azzaoui.jpg';

const President = () => {
	return (
		<Link to="president">
			<div className="card text-bg-dark">
				<img src={Azzaoui} className="card-img  custom-filter" alt="..." />
				<div className="card-img-overlay d-flex align-items-end justify-content-center">
					<h5 className="card-title  p-2 p-md-1 nom_president">
						Mohamed El Azzaoui
					</h5>
				</div>
			</div>
		</Link>
	);
};

export default President;
