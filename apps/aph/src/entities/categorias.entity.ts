import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorias {
  @PrimaryGeneratedColumn()
  id_categorias: string;

  @Column()
  nombre: string;

  @Column()
  slug: string;

  @Column()
  metadata: string;

  @Column()
  parent: string;

  @Column()
  tree_id: number;

  @Column()
  productsId: string;
}
