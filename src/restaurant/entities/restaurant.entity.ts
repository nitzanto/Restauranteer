import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imgURL: string;

  @Column({ type: 'double precision' }) // for storing floating-point numbers like ratings
  rating: number;

  @Column()
  location: string;

  @Column()
  cuisine: string;

  @Column('timestamptz', { array: true }) // multiple reservation dates
  reservationDates: Date[];
}
