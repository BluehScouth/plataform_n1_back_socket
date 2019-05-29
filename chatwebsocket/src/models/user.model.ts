import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Model {
  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
  })
  user_first_name?: string;

  @property({
    type: 'string',
  })
  user_last_name?: string;

  @property({
    type: 'string',
  })
  conversation_id?: string;

  @property({
    type: 'string',
  })
  tipo?: string;

  @property({
    type: 'string',
  })
  categoria?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
