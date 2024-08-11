/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KafkaMessageWhereUniqueInput } from "./KafkaMessageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { KafkaMessageUpdateInput } from "./KafkaMessageUpdateInput";

@ArgsType()
class UpdateKafkaMessageArgs {
  @ApiProperty({
    required: true,
    type: () => KafkaMessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KafkaMessageWhereUniqueInput)
  @Field(() => KafkaMessageWhereUniqueInput, { nullable: false })
  where!: KafkaMessageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => KafkaMessageUpdateInput,
  })
  @ValidateNested()
  @Type(() => KafkaMessageUpdateInput)
  @Field(() => KafkaMessageUpdateInput, { nullable: false })
  data!: KafkaMessageUpdateInput;
}

export { UpdateKafkaMessageArgs as UpdateKafkaMessageArgs };
