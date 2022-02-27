import { AppShell, Header, Select, SimpleGrid, Title } from '@mantine/core';
import { useCallback } from 'react';
import {
  LinksFunction,
  LoaderFunction,
  useLoaderData,
  useNavigate,
} from 'remix';
import sanitize from 'sanitize.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: sanitize },
];

interface LoaderData {
  catechism: string;
  translation: string;
}

export const loader: LoaderFunction = ({ params }): LoaderData => {
  const catechism = params['catechism'];
  const translation = params['translation'];

  if (!catechism || !translation) {
    throw new Response('Not Found', { status: 404 });
  }

  return { catechism, translation };
};

export default () => {
  const data = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  const onChangeCatechism = useCallback(
    (value: string) => {
      navigate(`/${value}/${data.translation}`);
    },
    [data.translation, navigate],
  );

  const onChangeTranslation = useCallback(
    (value: string) => {
      navigate(`/${data.catechism}/${value}`);
    },
    [data.catechism, navigate],
  );

  return (
    <AppShell
      fixed
      padding="md"
      header={
        <Header
          height={60}
          padding="xs"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Title order={1}>catechise.me</Title>
          <SimpleGrid cols={2}>
            <Select
              value={data.catechism}
              data={[
                { label: "Keach's Catechism", value: 'keach' },
                { label: "Spugeon's Catechism", value: 'spurgeon' },
              ]}
              onChange={onChangeCatechism}
            />
            <Select
              value={data.translation}
              data={[
                { label: 'ESV', value: 'esv' },
                { label: 'NASB', value: 'nasb' },
              ]}
              onChange={onChangeTranslation}
            />
          </SimpleGrid>
        </Header>
      }
    >
      <Title order={2}>
        {data.catechism} - {data.translation}
      </Title>
    </AppShell>
  );
};
