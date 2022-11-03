import styles from '../../styles/Hero.module.scss';
import Popcorn from '../../images/pexels-tima-miroshnichenko-7991378.jpg';

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero} flex-center`}>
      <div className={styles['img-container']}>
        <img src={Popcorn} alt='' />
      </div>
      <div className={styles.nowPlaying}>
        <p data-testid='hero'>NOW PLAYING</p>
        <h1>
          <span>NOW</span> PLAYING
        </h1>
        <div className={styles.heroDesc}>
          <p>
            TV Shows and web series database
            <br />
            Create personalized schedules. Episode guide cast, crew and
            character information
          </p>
        </div>
      </div>
      <div className='gradient' />
    </section>
  );
};

export default Hero;
