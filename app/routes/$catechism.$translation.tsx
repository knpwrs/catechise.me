import { AppShell, Button, Group, Header, Title } from '@mantine/core';
import { ChangeEvent, useCallback } from 'react';
import {
  ActionFunction,
  Form,
  LinksFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
} from 'remix';
import sanitize from 'sanitize.css';
import { PortableSelect } from '~/components/portable-select';
import * as cookies from '~/cookies';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: sanitize },
];

interface LoaderData {
  catechism: string;
  translation: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const catechism = params['catechism'];
  const translation = params['translation'];

  if (!catechism || !translation) {
    throw new Response('Not Found', { status: 404 });
  }

  const body: LoaderData = { catechism, translation };

  const headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Set-Cookie', await cookies.catechism.serialize(catechism));
  headers.append(
    'Set-Cookie',
    await cookies.translation.serialize(translation),
  );

  return new Response(JSON.stringify(body), {
    headers,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const catechism = data.get('catechism');
  const translation = data.get('translation');

  if (!catechism || !translation) {
    return redirect('/');
  }

  return redirect(`/${catechism}/${translation}`);
};

export default () => {
  const data = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  const onChangeCatechism = useCallback(
    (value: string | ChangeEvent<HTMLSelectElement> | null) => {
      navigate(`/${value}/${data.translation}`);
    },
    [data.translation, navigate],
  );

  const onChangeTranslation = useCallback(
    (value: string | ChangeEvent<HTMLSelectElement> | null) => {
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
          <Form method="post">
            <Group spacing="xs">
              <PortableSelect
                name="catechism"
                defaultValue={data.catechism}
                data={[
                  { label: 'Baptist Catechism', value: 'baptist' },
                  { label: "Spugeon's Catechism", value: 'spurgeon' },
                ]}
                onChange={onChangeCatechism}
              />
              <PortableSelect
                name="translation"
                defaultValue={data.translation}
                data={[
                  { label: 'ESV', value: 'esv' },
                  { label: 'NASB', value: 'nasb' },
                ]}
                onChange={onChangeTranslation}
              />
              <noscript>
                <Button type="submit">Go</Button>
              </noscript>
            </Group>
          </Form>
        </Header>
      }
    >
      <Title order={2}>
        {data.catechism} - {data.translation}
      </Title>
    </AppShell>
  );
};
