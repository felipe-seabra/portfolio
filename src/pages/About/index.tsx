/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import { useQuery } from 'react-query';
import setPageTitle from '../../utils/setPageTitle';
import fetchGithubApi from '../../utils/fetch';

import { Container, AboutText } from './styles';
import { profileImg } from '../../images';

const TEXTS = [
  `Com 10 anos de experiência em tecnologia educacional, sou Desenvolvedor Web Full-Stack com paixão pelo Front-End. 
Sou adaptável e me mantenho atualizado com as últimas tecnologias e tendências. Estou aberto a aprender e me desenvolver em outras áreas também.`,

  `Se você tiver interesse em tecnologia ou projetos desafiadores, 
por favor, entre em contato. Será um prazer conversar com você.`
];

export default function About() {
  const urlToFetch = 'https://api.github.com/users/felipe-seabra';
  const [githubImage, setGithubImage] = useState('');
  const [loaded, setLoaded] = useState(false);

  const { data } = useQuery(
    'picture-profile',
    async () => {
      const response = await fetchGithubApi(urlToFetch);
      return response;
    },
    {
      staleTime: 1000 * 60 * 5 // 5 minutes
    }
  );

  useEffect(() => {
    setPageTitle('Sobre - Felipe Seabra');

    if (data) {
      setGithubImage(data.avatar_url);
    } else {
      setGithubImage(profileImg);
    }
  }, [data]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Container className="container">
      <img
        style={{ display: loaded ? 'inline-block' : 'none' }}
        className="img-fluid about__picture"
        src={githubImage}
        alt="Foto Felipe Seabra"
        onLoad={handleImageLoad}
      />
      {!loaded && (
        <BlurhashCanvas
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          className="img-fluid about__picture"
          width={350}
          height={350}
          punch={1}
        />
      )}
      <AboutText>
        <h2>Sobre Mim</h2>
        <p>{TEXTS[0]}</p>
        <p>{TEXTS[1]}</p>
        <Link className="talk-btn" to="/contact">
          Vamos conversar!
        </Link>
      </AboutText>
    </Container>
  );
}
