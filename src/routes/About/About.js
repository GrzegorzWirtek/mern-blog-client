import './About.css';
import Button from '../../components/Button/Button';

import { useNavigate } from 'react-router-dom';

const ABOUT_PHOTO = 'images/about.png';
const ABOUT_TITLE = 'Kilka słów o mnie';
const ABOUT_DESCRIPTION =
	'W wolnych chwilach, pomiędzy pracą a nauką tworzenia stron internetowych, wsiadam w samochód i ruszam w nieznane. Kiedy zorientowałem się, że nie muszę pokonywać setek kilometrów, żeby zobaczyć i zwiedzić ciekawe miejsca, zacząłem dowiadywać się coraz więcej o lokalnych atrakcjcach turystycznych. Byłem zaskoczony jak wiele do zaoferowania ma mazowsze. Niniejszy blog jest zapisem wrażeń z części moich małych wypraw, zawiera również skromną dokumentację fotograficzną. Blog jest jednocześnie projektem do portfolio, wykonanym w ramach nauki web developmentu - strona została w całości zaprojektowana i stworzona przeze mnie. Zapraszam do lektury.';
const ABOUT_MAIL_TITLE = 'Zapraszam do kontaktu:';
const ABOUT_MAIL = 'grzegorz.wirtek@wp.pl';
const ABOUT_NAVIGATE_BUTTON_TEXT = 'Przejdź do bloga';

const About = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className='about'>
				<div className='about__description-wrapper'>
					<h3 className='about__title'>{ABOUT_TITLE}</h3>
					<p className='about__description'>{ABOUT_DESCRIPTION}</p>
					<div className='about__contact-wrapper'>
						<p className='about__mail-title'>{ABOUT_MAIL_TITLE}</p>
						<a className='about__mail' href={`mailto:${ABOUT_MAIL}`}>
							{ABOUT_MAIL}
						</a>
					</div>
				</div>
				<div className='about__img-wrapper'>
					<img
						src={ABOUT_PHOTO}
						alt='Grzegorz Wirtek fotografia'
						className='about__img'
					/>
				</div>
				<div className='about__button-wrapper'>
					<Button
						text={ABOUT_NAVIGATE_BUTTON_TEXT}
						type='button'
						click={() => navigate('/articles')}
					/>
				</div>
			</section>
		</>
	);
};

export default About;
