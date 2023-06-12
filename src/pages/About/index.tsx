/* eslint-disable camelcase */
import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BlurhashCanvas } from 'react-blurhash';
import setPageTitle from '../../utils/setPageTitle';
import fetchGithubApi from '../../utils/fetch';

import { Container, AboutText } from './styles';
import { profileImg } from '../../images';

const TEXTS = [
  `Tenho mais de 10 anos de experiência na área de tecnologia educacional. 
Estou me especializando em Desenvolvimento Web Full-Stack na Trybe, com grande interesse em Front-End. 
Sempre atualizado com as últimas tendências, adoro colaborar e aprender com os outros.`,

  `Se você tiver interesse em tecnologia ou projetos desafiadores, 
por favor, entre em contato. Será um prazer conversar com você.`
];

export default function About() {
  const urlToFetch = 'https://api.github.com/users/felipe-seabra';
  const [githubImage, setGithubImage] = useState('');
  const [loaded, setLoaded] = useState(false);

  const memoizedGithubApiFetch = useMemo(() => fetchGithubApi(urlToFetch), []);

  useEffect(() => {
    async function fetchImage() {
      try {
        const { avatar_url } = await memoizedGithubApiFetch;
        setGithubImage(avatar_url);
      } catch (error) {
        setGithubImage(profileImg);
        setLoaded(true);
      }
    }
    fetchImage();
    setPageTitle('Sobre - Felipe Seabra');
  }, []);

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
