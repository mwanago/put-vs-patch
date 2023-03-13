import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from '../prisma/prismaError';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticlesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getArticles() {
    return this.prismaService.article.findMany();
  }

  async getArticleById(id: number) {
    const article = await this.prismaService.article.findUnique({
      where: {
        id,
      },
    });
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  async createArticle(article: ArticleDto) {
    return this.prismaService.article.create({
      data: article,
    });
  }

  async updateArticle(id: number, article: ArticleDto) {
    try {
      return await this.prismaService.article.update({
        data: {
          ...article,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new NotFoundException();
      }
      throw error;
    }
  }

  async deleteArticle(id: number) {
    try {
      return this.prismaService.article.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new NotFoundException();
      }
      throw error;
    }
  }
}
