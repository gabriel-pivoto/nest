import { Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { PrismaService } from 'src/prisma/prisma.service'



@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController{
    constructor(private prisma: PrismaService){}

    @Post()
    @HttpCode(201)
    // @UsePipes(new ZodValidationPipe(createAccountBodySchema))
    async handle(){
        
    }


}