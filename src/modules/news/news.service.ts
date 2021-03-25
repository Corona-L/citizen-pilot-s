import { Injectable, Inject } from '@nestjs/common';
import {News} from './news.entity';
import {NewsDto} from './dto/news.dto';
import {Employee} from '../employees/employee.entity';
import {NEWS_REPOSITORY} from '../../core/constants'

@Injectable()
export class NewsService {
  constructor(@Inject(NEWS_REPOSITORY) private readonly newsRepository: typeof News) {  }

  async create(news: NewsDto, userId): Promise<News> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this. newsRepository.create<News>({...news, userId})
  }

  async findAll(): Promise<News[]> {
    return await this.newsRepository.findAll<News>({
      include:[{model: Employee, attributes: {exclude: ['password']}}]
    });
  }

  async findOne(id): Promise<News> {
    return await this.newsRepository.findOne({
      where: { id },
      include: [{model: Employee, attributes: {exclude: ['password']}}]
    })
  }

  async delete(id, employeeId) {
    return await this.newsRepository.destroy({ where: { id, employeeId } });
  }

  async update(id, data, employeeId) {
    const [numberOfAffectedRows, [updatedNews]] = await this.newsRepository.update({ ...data }, { where: { id, employeeId }, returning: true });

    return { numberOfAffectedRows, updatedNews };
  }
}
