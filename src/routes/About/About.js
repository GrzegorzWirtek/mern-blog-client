import './About.css';
import Button from '../../components/Button/Button';

import { useNavigate } from 'react-router-dom';

const ABOUT_PHOTO = 'images/about.png';
const ABOUT_TITLE = 'Kilka słów o mnie';
const ABOUT_DESCRIPTION =
	'Mając na uwadze to, że moja praca zawodowa i nauka wymagają spędzania wielu godzin przed komputerem, wyjątkową przyjemność sprawiają mi wycieczki i spacery. Kiedy tylko mam trochę więcej czasu lubię wsiąść w samochód i pojechać w nieznane. Dzięki temu znalazłem wiele miejsc położonych stosunkowo blisko Warszawy, gdzie można miło spędzić czas, zrelaksować się i pozwiedzać';
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
