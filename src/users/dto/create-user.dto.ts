import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty', description: 'password' })
  readonly password: string;
}
