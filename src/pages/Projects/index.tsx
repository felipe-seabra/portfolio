/* eslint-disable no-console */
import React, { useState, useEffect, memo } from 'react';
import Card from '../../components/Card';
import setPageTitle from '../../utils/setPageTitle';
import fetchGithubApi from '../../utils/fetch';
import Loading from '../../components/Loading';

import { Container, PojectsContainer } from './styles';

type Repo = {
  id: number;
  name: string;
  description: string;
};

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const urlToFetch = 'https://api.github.com/users/felipe-seabra/repos';

  useEffect(() => {
    async function fetchData() {
      try {
        const repositories = await fetchGithubApi(urlToFetch);
        if (repositories) {
          const filteredRepositories = repositories.filter(
            (repo: { name: string }) => !repo.name.startsWith('felipe')
          );
          setRepos(filteredRepositories);
        }
      } catch (err) {
        console.error(err);
      }
    }

    setPageTitle('Projetos - Felipe Seabra');
    fetchData();
  }, [urlToFetch]);

  const renderCards = () => {
    if (repos.length < 1) {
      return <Loading />;
    }

    return repos.map((card) => (
      <Card key={card.id} name={card.name} description={card.description} />
    ));
  };

  return (
    <Container>
      <h2 className="mt-5">Meus Projetos</h2>
      <PojectsContainer>{renderCards()}</PojectsContainer>
    </Container>
  );
}

export default memo(Projects);
