import { IsNotEmpty, MinLength } from 'class-validator';

export class ReportsDto {
  @IsNotEmpty()
  readonly urgency: boolean;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  @MinLength(2)
  readonly longitude: number;

  @IsNotEmpty()
  @MinLength(2)
  readonly latitude: number;

  @IsNotEmpty()
  readonly category: string;

  readonly image: string;
}
