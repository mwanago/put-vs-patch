import { IsString, IsNotEmpty } from 'class-validator';
import { CanBeUndefined } from '../../utils/canBeUndefined';
import { CanBeNull } from '../../utils/canBeNull';

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  content?: string;

  @IsString()
  @CanBeNull()
  @CanBeUndefined()
  description?: string | null;
}
