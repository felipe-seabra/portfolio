/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import Loading from '../Loading';
import fetchGithubApi from '../../utils/fetch';
import { noImage } from '../../images';

import { Container } from './styles';

function Card({ name, description }: { name: string; description: string }) {
  const [image, setImage] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const MAX_LENGTH = 85;
  const URL = `https://github.com/felipe-seabra/${name}`;
  const URL_FETCH_IMAGE = `https://api.github.com/repos/felipe-seabra/${name}/contents/images/demo.png`;

  const newName = name
    .replace(/^trybe-project/i, '')
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (firstLetter: string) => firstLetter.toUpperCase());

  useEffect(() => {
    async function fetchDemo() {
      try {
        const data = await fetchGithubApi(URL_FETCH_IMAGE);
        setImage(!data.message ? data.download_url : noImage);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
        setImage(noImage);
        setIsLoaded(true);
      }
    }

    fetchDemo();
  }, [URL_FETCH_IMAGE]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleImageLoad = () => {
    setIsLoadedImage(true);
  };

  const textToShow =
    description.length <= MAX_LENGTH
      ? description
      : showMore
      ? description
      : `${description.slice(0, MAX_LENGTH)}...`;

  return (
    <Container>
      <div>
        {!isLoaded ? (
          <Loading />
        ) : (
          <>
            <img
              style={{ display: isLoadedImage ? 'inline-block' : 'none' }}
              src={image}
              alt={name}
              onLoad={handleImageLoad}
            />
            {!isLoadedImage && (
              <BlurhashCanvas
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                className="img-fluid about__picture"
                width={335}
                height={135}
                punch={1}
              />
            )}
            <div className="card-body">
              <h3>{newName}</h3>
              <p>
                {textToShow}
                {description.length > MAX_LENGTH && (
                  <button className="show-more" onClick={toggleShowMore}>
                    {showMore ? 'ver menos' : 'ver mais'}
                  </button>
                )}
              </p>
              <Link to={URL} target="_blank" rel="noreferrer" className="card-btn mt-2">
                Visitar Repositório
              </Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default memo(Card);
