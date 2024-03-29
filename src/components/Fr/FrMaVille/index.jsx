import React from 'react';
import bab from '/imgs/bab.jpg';
import lala from '/imgs/lala-aicha.jpg';
import medina from '/imgs/medina.jpg';
import map from '/imgs/map.png';
import habitants from '/imgs/habitants.jpg';
import tradution from '/imgs/tradution.jpg';
import ka from '/imgs/Kaak.jpg';
import berkoukes from '/imgs/berkoukes.jpg';
import karan from '/imgs/karan.jpg';
import boudin from '/imgs/boudin-blanc.jpg';
import babsidi from '/imgs/bab-sidi.jpg';

const FrMaVille = () => {
	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={babsidi} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>Bab Sidi Abdelwahab</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={lala} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>Parc Lalla Aicha</h5>
						</div>
					</div>
					<div className="carousel-item">
						<img src={medina} className="d-block w-100" />
						<div className="carousel-caption">
							<h5>Medina </h5>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="container">
				{/* ligne 1  */}
				<h3 className="m-5 text-center">QUE DEVRIEZ-VOUS VISITER ?</h3>
				<br />
				<div className="row d-flex flex-column flex-md-row text-center">
					<div className="col-md-6">
						<img className="img-fluid" src={map} alt="image" />
					</div>
					<br />
					<div className="col-md-6">
						<h4>La ville Oujda</h4>
						<p>
							Oujda est une ville frontalière du Maroc, située à l'extrême
							nord-est du pays, à la limite de la région du Rif Oriental, sa
							proximité avec le port de Nador et avec l'Algérie à 5 km lui
							permet de jouer le rôle de carrefour entre le Maroc et l'Algérie,
							elle compte plus d'un million d’habitants. La médina d'Oujda avec
							son cachet arabo-musulman atteignait une superficie de vingt-cinq
							hectares, abritant plusieurs monuments de valeur historique
							indéniable, était entourée d’une ceinture de jardins plantés
							d’oliviers, ceinture épaisse de mille mètres en certains endroits.
							Chaque jardin était clos d’un mur en pisé de 1,80 à 2 mètres de
							haut percé de nombreux trous. Ces jardins constituaient donc un
							système de défense appréciable. Pas si vite, y’a pas que la médina
							à voir.
						</p>
					</div>
				</div>
				<br />
				<br />
				{/* ligne 2 */}

				<div className="row d-flex flex-column flex-md-row text-center">
					<div className="col-md-6">
						<img className="img-fluid" src={habitants} alt="image" />
					</div>
					<div className="col-md-6 mt-4">
						<h4>Les habitants d'Oujda (Wjada)</h4>
						<p className="para">
							Les habitants d'Oujda sont connus pour leur hospitalité leur
							gentillesse envers les visiteurs. Ils sont souvent décrits comme
							chaleureux, accueillants et ouverts d'esprit. La ville est
							également connue pour sa diversité culturelle, avec des influences
							marocaines, arabes et berbères.Les habitants d'Oujda sont fiers de
							leur patrimoine culturel et historique, et ils sont souvent très
							attachés à leur ville et à leur région. Ils sont également connus
							pour leur sens de la communauté et leur esprit de solidarité.
						</p>
					</div>
				</div>
				<br />
				<br />
				{/* ligne 3 */}

				<div className="row d-flex flex-column flex-md-row">
					<div className="col-md-6">
						<img className="img-fluid" src={tradution} alt="image" />
					</div>
					<div className="col-md-6 mt-4" style={{textAlign : 'center'}}>
						<h4>Les Traditions</h4>
						<p className="para">
							Les habitants d'Oujda ont une culture riche en traditions et
							coutumes locales. Voici quelques-unes des traditions les plus
							importantes de la ville et de la région :La fête du Mouloud :
							c'est la célébration de la naissance du prophète Mohammed. Elle
							est célébrée chaque année à Oujda et dans toute la région de
							l'Oriental. Elle est souvent associée à des rituels religieux et
							est jouée avec des instruments tels que le guembri, le krakebs et
							le tbel.
						</p>
					</div>
				</div>

				{/* card */}

				<h3 className="mt-4" style={{textAlign : 'center'}}>Que devriez-vous visiter ?</h3>
				<br />
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card h-100">
							<img src={bab} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Bab El Gharbi</h5>
								<p className="card-text">
									La vieille ville d'Oujda regorge de ruelles étroites et
									sinueuses bordées de bâtiments historiques en terre. C'est un
									endroit idéal pour découvrir l'architecture et la culture
									marocaines.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={medina} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Medina</h5>
								<p className="card-text">
									La ville de Oujda dans la région du Rif oriental est l’une des
									villes du Maroc où les traditions sont les plus ancrées du
									fait de son histoire et de sa population conservatrice. Forte
									d’une histoire millénaire, Oujda garde encore les vestiges de
									son passé glorieux. On vous fait une petite visite guidée ?
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img src={lala} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Parc Lalla-Aicha</h5>
								<p className="card-text">
									Non loin de la médina, s'étend le Parc Lalla Aïcha sur une
									superficie de 20 hectares environ. Créé en 1935, il constitue
									un lieu de détente pour les habitants d'Oujda. Il offre une
									belle aire de loisirs avec ses piscines, ses terrains de
									sports, ses clubs de tennis et d'équitation ainsi que ses
									équipements de jeux d'enfants...
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* ligne 4 */}

				<h3 className="mt-4" style={{textAlign : 'center'}}>Qu’est-ce que tu devrais goûter ?</h3>
				<br />
				<div className="container">
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={ka} alt="image" />
						</div>

						<div className="col-8 mx-auto">
							<h4  className='mt-3 mx-auto text-center'>Kaak</h4>
							<p>
								Le kâak ou plus correctement ka‘ak, littéralement « gâteau » en
								arabe classique, est un terme qui peut désigner plusieurs
								pâtisseries maghrébines et orientales sous forme d'anneaux
								Magnifique souvenir !
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={berkoukes} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4  className='mt-3 text-center'>Berkoukes</h4>
							<p>
								Le berkoukes, appelé aussi berkoukech, avazine ou aïch, est un
								plat traditionnel du Maghreb, préparé à base de pâtes en forme
								de gros grains de couscous, de légumes de saison et de viande.Le
								berkoukes est le nom donné au grain de couscous roulé à la main.
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={karan} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4  className='mt-3 text-center'>Karan</h4>
							<p>
								Karan une spécialité salée à base de farine de pois chiches que
								l'on déguste sous forme de sandwich dans un morceau de baguette,
								le tout saupoudré de cumin; pourquoi de cumin? Tout simplement
								pour éviter les ballonnements dus à la farine de pois chiches
							</p>
						</div>
					</div>
					<br />
					<div className="row d-flex flex-column flex-md-row mx-auto">
						<div className="col-4">
							<img src={boudin} alt="image" />
						</div>
						<div className="col-8 mx-auto">
							<h4 className='mt-3 text-center'>BOUDIN</h4>
							<p>
								Le boudin est une préparation de charcuterie mise dans des
								boyaux. Il se consomme froid ou chaud.Les plus anciens ont la
								larme à l’œil et la salive à la bouche en se partageant le
								boudin et en rappelant les bâfrées de jadis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FrMaVille;
