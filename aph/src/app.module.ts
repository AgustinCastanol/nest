import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: `${process.env.db_postgres_host}`,
      port: parseInt(`${process.env.db_postgres_port}`),
      username: `${process.env.db_postgres_user}`,
      password: `${process.env.db_postgres_pass}`,
      database: `${process.env.db_postgres_db}`,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
