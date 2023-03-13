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
import { ArticleDto } from './article.dto';

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
  async createArticle(@Body() article: ArticleDto) {
    return this.articlesService.createArticle(article);
  }

  @Patch(':id')
  async updateArticle(
    @Param() { id }: FindOneParams,
    @Body() article: ArticleDto,
  ) {
    return this.articlesService.updateArticle(id, article);
  }

  @Delete(':id')
  async deleteArticle(@Param() { id }: FindOneParams) {
    return this.articlesService.deleteArticle(Number(id));
  }
}
