import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}
  async create(data: CreateTaskDto) {
    const toSave = this.repo.create(data);
    return this.repo.save(toSave).catch(({ message }) => {
      throw new InternalServerErrorException(message);
    });
  }

  async findAll() {
    const [result, count] = await this.repo
      .createQueryBuilder('task')

      .orderBy('task.name', 'ASC')
      .getManyAndCount()
      .catch(({ message }) => {
        throw new InternalServerErrorException(message);
      });
    return { result, count };
  }

  async updateOne(id: number, data: UpdateTaskDto) {
    const toUpdate = this.repo.create(data);

    const { affected } = await this.repo
      .update(id, toUpdate)
      .catch(({ message }) => {
        throw new InternalServerErrorException(message);
      });
    return affected === 1;
  }

  async deleteOne(id: number) {
    const { affected } = await this.repo.delete(id).catch(({ message }) => {
      throw new InternalServerErrorException(message);
    });

    return affected === 1;
  }
}
