import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { FindOneParams } from '../utils/findOneParams';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UpdateArticleDto } from './dto/updateArticle.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticleById(@Param() { id }: FindOneParams) {
    return this.articlesService.getArticleById(id);
  }

  @Post()
  async createArticle(@Body() article: CreateArticleDto) {
    return this.articlesService.createArticle(article);
  }

  @Patch(':id')
  async updateArticle(
    @Param() { id }: FindOneParams,
    @Body() article: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(id, article);
  }

  @Delete(':id')
  async deleteArticle(@Param() { id }: FindOneParams) {
    return this.articlesService.deleteArticle(Number(id));
  }
}
