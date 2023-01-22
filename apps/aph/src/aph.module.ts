import { Module } from '@nestjs/common';
import { AphController } from './aph.controller';
import { AphService } from './aph.service';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 32768,
      username: 'postgres',
      password: 'postgrespw',
      database: 'products',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AphController],
  providers: [AphService],
})
export class AphModule {}

/*    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 32768,
      username: 'postgres',
      password: 'postgrespw',
      database: 'products',
      synchronize: true,
    }), */
