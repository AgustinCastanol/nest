import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { v4 as uuidv1 } from 'uuid';
@Injectable()
export class AphService {
  constructor(private sequelize: Sequelize) {}
  async getProducts(data: any) {
    console.log('data', data);
    const obj = {
      id_categorias: uuidv1(),
      nombre: 'test',
      slug: 'test',
      metadata: 'test',
      parent: '',
      tree_id: 1,
      productsId: '',
    };
    const res = await this.sequelize.query(
      `INSERT INTO "public"."categories"("id_categorias","name","slug","metadata","parent","tree_id","productsId") VALUES ('${obj.id_categorias}','${obj.nombre}','${obj.slug}','${obj.metadata}',null,'${obj.tree_id}',null)`,
    );
    return { obj, res };
  }
}
