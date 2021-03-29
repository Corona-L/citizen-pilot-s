import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Report extends Model<Report> {
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  urgency: boolean;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  longitude: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  latitude: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    values: [
      'roads and streets',
      'transport',
      'envrionment',
      'sanitation',
      'utilities',
    ],
  })
  category: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  image: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
