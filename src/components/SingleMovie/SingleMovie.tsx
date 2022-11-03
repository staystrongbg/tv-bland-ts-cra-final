import styles from '../../styles/MoviePage.module.scss';
import movieImg from '../../images/pexels-tima-miroshnichenko-7991378.jpg';
import { Rating } from 'react-simple-star-rating';
import { useState, useEffect } from 'react';
import Show from '../../models/Show';
import { useParams } from 'react-router-dom';
import ShowsApi from '../../api/shows';

const SingleMovie: React.FC = () => {
  const params = useParams();
  const [movie, setMovie] = useState<Show | null>(null);
  useEffect(() => {
    if (params.id) {
      ShowsApi.get(params.id)
        .then((res) => {
          setMovie(res);
        })
        .catch((error) => console.error(error));
    }
  }, [params.id]);

  return (
    <>
      {movie ? (
        <div className={`${styles.moviePage}`}>
          <div className={styles.bgImage}>
            <img src={movieImg} alt='' />
          </div>
          <div className={styles.movie}>
            <div className={styles.image}>
              {movie.image && movie.image.original && (
                <img src={movie.image.original} alt='' />
              )}
            </div>
            <div className={styles.desc}>
              <div style={{ display: 'flex', gap: '10px' }}>
                {movie.rating && movie.rating.average && (
                  <>
                    <Rating
                      allowFraction
                      readonly
                      size={18}
                      initialValue={movie.rating.average / 2}
                    />
                    <span>{movie.rating.average / 2}</span>
                  </>
                )}
              </div>

              <h1>{movie.name}</h1>
              <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
          </div>
          <div className={styles.scheduleAndStarring}>
            <div className={styles.schedule}>
              <h3>Show info</h3>
              <div className={styles.info}>
                <div className={styles.days}>
                  <p>Schedule: </p>
                  {movie.schedule &&
                    movie.schedule.days.map((day) => <p key={day}> {day}</p>)}
                </div>
                <div className={styles.status}>
                  <p>status: </p>
                  <p>{movie.status}</p>
                </div>
                <div className={styles.status}>
                  <p>network: </p>
                  {movie.network && movie.network.name && (
                    <p>{movie.network.name}</p>
                  )}
                </div>
                <div className={styles.genres}>
                  <p>genres: </p>
                  {movie.genres.map((g) => (
                    <p key={g}> {g}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.schedule}>
              <h3>Show info</h3>
              <div className={styles.info}>
                <div className={styles.days}>
                  <p>Schedule: </p>
                  {movie.schedule &&
                    movie.schedule.days.map((day) => <p key={day}> {day}</p>)}
                </div>
                <div className={styles.status}>
                  <p>status: </p>
                  <p>{movie.status}</p>
                </div>
                <div className={styles.status}>
                  <p>network: </p>
                  <p>{movie.network && movie.network.name}</p>
                </div>
                <div className={styles.genres}>
                  <p>genres: </p>
                  {movie.genres.map((g) => (
                    <p key={g}> {g}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 style={{ color: '#fff' }}>Loading...</h3>
      )}
    </>
  );
};

export default SingleMovie;
