// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tickets, Events } = initSchema(schema);

export {
  Tickets,
  Events
};