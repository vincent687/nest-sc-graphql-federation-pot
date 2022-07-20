import { Field, ObjectType, Int, Directive, ID } from '@nestjs/graphql';
import { Hobby } from 'src/hobby/graphql/hobby.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => Int)
  @Directive('@external')
  id: number;
  @Field()
  registeredAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  name?: string;
  @Field(() => [Hobby])
  hobbies: Hobby[];
}
