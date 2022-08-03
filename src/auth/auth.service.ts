import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class AuthService {
    constructor(private usersRepository: UserRepository) { }
    async signUp(authCreadentialsDto: AuthCredentialsDto): Promise<void> {
        return this.usersRepository.createUser(authCreadentialsDto);
    }
    async signIn(authCreadentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.usersRepository.signIn(authCreadentialsDto);
    }
}
