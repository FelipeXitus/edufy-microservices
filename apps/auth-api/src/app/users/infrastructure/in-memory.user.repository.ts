import { Injectable } from '@nestjs/common';
import { UserEntity } from '../domain/user.entity';
import { IUserRepository } from '../domain/user.repository';

@Injectable()
export class InMemoryUserRepository implements IUserRepository {
  private readonly users = new Map<string, UserEntity>();

  findOneByEmail(email: string): Promise<UserEntity | null> {
    return Promise.resolve(this.users.get(email) ?? null);
  }

  findOneById(id: string): Promise<UserEntity | null> {
    const allUsers = Array.from(this.users.values());
    return Promise.resolve(allUsers.find((user) => user.sub === id) ?? null);
  }

  save(user: UserEntity): Promise<void> {
    this.users.set(user.email, user);
    return Promise.resolve();
  }
}
