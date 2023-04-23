import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'fjzvecfy',
  dataset: 'production',
  apiVersion: '2023-04-22',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
