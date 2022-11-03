import { Rating } from 'react-simple-star-rating';
import styles from '../../styles/MovieCard.module.scss';
import { Link } from 'react-router-dom';
import Show from '../../models/Show';
const MovieCard: React.FC<{ data: Show }> = ({ data }) => {
  return (
    <>
      {data ? (
        <div className={styles.showCard}>
          <Link to={`/shows/${data.id}`}>
            {data.image && data.image.medium && (
              <img src={data.image.medium} alt='' />
            )}
          </Link>
          <div className={styles.desc}>
            <div className={styles.rate}>
              <Rating
                readonly
                allowFraction
                size={18}
                initialValue={data?.rating?.average / 2}
              />
            </div>
            <h3>
              {data.name.length > 40
                ? data.name.slice(0, 39) + '...'
                : data.name}
            </h3>
            <p>Runtime: {data.runtime} min</p>
            {/* <p>Airdate: {data.airtime}</p> */}
          </div>
        </div>
      ) : (
        <h3 style={{ color: '#fff' }}>loading...</h3>
      )}
    </>
  );
};

export default MovieCard;
