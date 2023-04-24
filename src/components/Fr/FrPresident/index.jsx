import './index.scss';
import Azzaoui from '/imgs/Azzaoui.jpg';

const FrPresident = () => {
	return (
		<>
			<h2 className="text-center m-5">
				Mot du présidèrent
			</h2>
			<img
				src={Azzaoui}
				className="card-img  custom-filter"
				alt="..."
				style={{ height: '550px' }}
			/>

			<div className="body mt-5 mx-5">
				<p>
					La ville d'Oujda est l'une des villes du Maroc où les traditions sont
					les plus ancrées du fait de son histoire et de sa population
					conservatrice.
				</p>
				<p>
					Oujda fut fondée par Ziri Ibn Attia, chef Zenete de la tribu de
					Maghraoua vers 944 au centre de la plaine des Angads.
				</p>
				<p>
					Oujda est une ville frontalière du Maroc, située à l'extrême nord-est
					du pays, à la limite de la région du Rif Oriental, sa proximité avec
					le port de Nador et avec l'Algérie à 5 km lui permet de jouer le rôle
					de carrefour entre le Maroc et l'Algérie, elle compte plus de 5
					million d’habitants.
				</p>
				<ul>
					<li>Superficie : 100 km</li>

					<li className='mt-2'>
						Taux d'emploi : 32,7% (Haut-Commissariat à la Statistique, 2020){' '}
					</li>

					<li className='mt-2'>
						Taux de chômage : 19,5% (Haut-Commissariat à la Statistique, 2020){' '}
					</li>

					<li className='mt-2'>Le siège principal du groupe : Avenue Mohammed V, 60000 Oujda</li>

					<li className='mt-2'>Nombre des arrondissements 18.</li>
					<li className='mt-2'>
						Nombre de membres du Conseil Communal d'Oujda : 61 (39 hommes et 22
						femmes)
					</li>
					<li className='mt-2'>
						Le nombre de partis politiques constituant le Conseil Communal
						d'Oujda : 16
					</li>
				</ul>
				<p>
					Oujda 2027, capitale de l'Est et ville citoyenne, s'appuie sur sa
					communauté pour gérer numérique et des mécanismes de coopération et de
					partenariat élargi aux niveaux local, régional, national, et des
					affaires internationales, renforce sa capacité institutionnelle et
					organisationnelle et recherche des solutions innovantes qui lui
					permettent d’Offrir des infrastructures qualifiées et des services de
					proximité de qualité, et verdir la ville et durable, avec des
					qualifications économiques, commerciales et touristiques attractives
					pour l'investissement il contribue à la consolidation de la justice
					spatiale dans son domaine territorial, ainsi qu'à l'autonomisation de
					sa population la ville et les expatriés sont aveugles à vivre et à
					coexister dans des conditions décentes.
				</p>
			</div>
		</>
	);
};

export default FrPresident;
