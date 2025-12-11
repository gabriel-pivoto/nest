import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { PrismaService } from './prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateAccountController } from './controllers/authenticate.controller'
import { CreateQuestionController } from './controllers/create-question.controle'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],

  controllers: [CreateAccountController, AuthenticateAccountController, CreateQuestionController],
  providers: [PrismaService],
})
export class AppModule {}
