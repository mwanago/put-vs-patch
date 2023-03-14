import { IsString, IsNotEmpty } from 'class-validator';
import { CanBeUndefined } from '../../utils/canBeUndefined';
import { CanBeNull } from '../../utils/canBeNull';

export class ReplaceArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @CanBeNull()
  @CanBeUndefined()
  description?: string | null = null;
}
