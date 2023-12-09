import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Restaurant {
  @PrimaryColumn('uuid')
  id: string = uuidv4();

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imgURL: string;

  @Column({ type: 'double precision' }) //  for storing floating-point numbers like ratings
  rating: number;

  @Column()
  location: string;

  @Column()
  cuisine: string;

  @Column('timestamptz', { array: true }) // multiple reservation dates
  reservationDates: Date[];

  constructor(partial: Partial<Restaurant>) {
    Object.assign(this, partial);
  }
}
