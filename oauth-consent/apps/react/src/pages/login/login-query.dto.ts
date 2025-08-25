import { IsOptional, IsString } from 'class-validator';

export class LoginQueryDto {
  @IsOptional()
  @IsString()
  flow?: string;

  @IsOptional()
  @IsString()
  aal: string = '';

  @IsOptional()
  @IsString()
  refresh: string = '';

  @IsOptional()
  @IsString()
  return_to: string = '';

  @IsOptional()
  @IsString()
  organization: string = '';

  @IsOptional()
  @IsString()
  via: string = '';

  @IsOptional()
  // @IsNotEmpty()
  @IsString()
  login_challenge: string = '';

  @IsOptional()
  // @IsNotEmpty()
  @IsString()
  identity_schema: string = '';
}
