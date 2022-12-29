import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { Table, Model, Column, DataType, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role) // Указываем на что ключ ссылается, в нашем случае на таблицу ролей
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;
}
