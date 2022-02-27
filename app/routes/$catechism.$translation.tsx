import { AppShell, Header, Title } from '@mantine/core';
import { LinksFunction, LoaderFunction, useLoaderData } from 'remix';
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

  return (
    <AppShell
      fixed
      padding="md"
      header={
        <Header height={60} padding="xs">
          <Title order={1}>catechise.me</Title>
        </Header>
      }
    >
      <Title order={2}>
        {data.catechism} - {data.translation}
      </Title>
    </AppShell>
  );
};
