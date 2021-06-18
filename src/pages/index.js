import React, { useCallback, useState, useEffect } from 'react';
import config from '../settings';
import client from '../api/client';
import { Container, Header, Input, Image } from 'schofield-common-components';
import { Card, CardHeader, CardBody, CardFooter } from '../app-components';
import { withTheme } from 'schofield-themes';

const BASE_URL = config.get('API_BASE_URL');

const Home = ({ theme }) => {
  let [search, updateSearch] = useState({
    value: '',
    page: 1,
    songs: []
  })

  const getSongs = useCallback(async () => {
    const response = await client.post(`${BASE_URL}spotify`, { query: search.value, page: search.page })
    updateSearch({ ...search, songs: [ ...search.songs, ...response.data.tracks.items ] })
  }, [search])

  useEffect(() => {
    search.value !== '' && getSongs()
  }, [search.value, search.page, getSongs])

  const onKeypress = useCallback(async (e) => {
    if (e.key === 'Enter') {
      updateSearch({
        value: e.target.value,
        page: 1,
        songs: []
      })
    }
  }, [])

  const onScroll = useCallback((e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      updateSearch({ ...search, page: search.page+=1 })
    }
  }, [search])

  const onClick = useCallback((item) => {
    window.open(item.external_urls.spotify, '_blank')
  }, [])

  const renderCard = (item, i) => (
    <Card key={i} theme={theme.home.cards.card.container}>
      <CardHeader theme={theme.home.cards.card.header}>
        
      </CardHeader>
      <CardBody theme={theme.home.cards.card.body}>
        <Image onClick={() => onClick(item)} src={item.album.images[0].url} theme={theme.home.cards.card.image} />
      </CardBody>
      <CardFooter theme={theme.home.cards.card.footer}>

      </CardFooter>
    </Card>
  )

  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Container theme={theme.home.search.container}>
        <Header theme={theme.home.search.header}>Song Recommendations</Header>
        <Input theme={theme.home.search.input} type='text' onKeyPress={onKeypress} placeholder='Genre/Artist/Vegetable/Favorite Bird/Chord/Instrument...' />
      </Container>
      <Container theme={theme.home.cards.rail} onScroll={onScroll}>
        <Container theme={theme.home.cards.container}>
          {
            search.songs.map(renderCard)
          }
        </Container>
      </Container>
    </Container>
  );
}

export default withTheme(Home)
