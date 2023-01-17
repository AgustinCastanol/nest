import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.db_mongo_user}:${process.env.db_mongo_pass}@cluster0.lpr1s.mongodb.net/admin_users?retryWrites=true&w=majority`,
    ),
    AuthModule,
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
