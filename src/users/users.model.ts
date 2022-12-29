import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  // Создаем interface для создания объекта класса
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Забанен пользователь или нет' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'За хулиганство', description: 'Причина блокировки' })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  rols: Role[];
}
