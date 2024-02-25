import React, { useState, useEffect, memo } from 'react';
import { useQuery } from 'react-query';
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

  const { data, isFetching } = useQuery(
    'repos',
    async () => {
      const response = await fetchGithubApi(urlToFetch);
      return response;
    },
    {
      staleTime: 1000 * 60 * 5 // 5 minutes
    }
  );

  useEffect(() => {
    setPageTitle('Projetos - Felipe Seabra');

    if (data) {
      setRepos(data.filter((repo: { name: string }) => !repo.name.startsWith('felipe')));
    }
  }, [data]);

  const renderCards = () => {
    if (isFetching) {
      return <Loading />;
    }

    return repos.map((card) => (
      <Card key={card.id} name={card.name} description={card.description} id={card.id} />
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
