/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import fetchGithubApi from '../../utils/fetch';
import { noImage } from '../../images';

import { Container, CardBody } from './styles';

function Card({
  name,
  description,
  id
}: {
  name: string;
  description: string;
  id: number;
}) {
  const [image, setImage] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const MAX_LENGTH = 85;
  const URL = `https://github.com/felipe-seabra/${name}`;
  const URL_FETCH_IMAGE = `https://api.github.com/repos/felipe-seabra/${name}/contents/images/demo.png`;

  const newName = name
    .replace(/^trybe-project/i, '')
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (firstLetter: string) => firstLetter.toUpperCase());

  const { data, isFetching } = useQuery(
    `repo-${id}`,
    async () => {
      const response = await fetchGithubApi(URL_FETCH_IMAGE);
      return response;
    },
    {
      staleTime: 1000 * 60 * 5 // 5 minutes
    }
  );

  useEffect(() => {
    if (data) {
      setImage(!data.message ? data.download_url : noImage);
    }
  }, [data]);

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
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <img
            style={{ display: isLoadedImage ? 'inline-block' : 'none' }}
            className="project__image"
            src={image}
            alt={name}
            onLoad={handleImageLoad}
          />
          {!isLoadedImage && (
            <BlurhashCanvas
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              className="project__image"
              width={335}
              height={135}
              punch={1}
            />
          )}
          <CardBody>
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
          </CardBody>
        </>
      )}
    </Container>
  );
}

export default memo(Card);
