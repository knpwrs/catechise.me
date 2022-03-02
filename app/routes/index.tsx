import { LoaderFunction, redirect } from 'remix';
import * as cookies from '~/cookies';

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie');
  const catechism = (await cookies.catechism.parse(cookie)) || 'baptist';
  const translation = (await cookies.translation.parse(cookie)) || 'esv';

  return redirect(`/${catechism}/${translation}`);
};
