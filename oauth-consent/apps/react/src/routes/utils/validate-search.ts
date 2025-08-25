import { type ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export const validateSearch = <TDto extends object>(
  routerName: string,
  Dto: ClassConstructor<TDto>,
) => {
  return (raw: Record<string, unknown>) => {
    const instance = plainToInstance(Dto, raw, {
      enableImplicitConversion: true, // safely cast strings → numbers/booleans
      // excludeExtraneousValues: true,   // drop fields not defined in the DTO
      // exposeDefaultValues: true,       // ensure default values are applied
    });

    const errors = validateSync(instance, {
      whitelist: true, // strip properties without decorators
      // forbidNonWhitelisted: true, // throw if extra props are present
      // forbidUnknownValues: true,  // throw if input is not a plain object
    });
    if (errors.length > 0) {
      const message = `[${routerName}] Invalid search params: ${JSON.stringify(errors)}`;
      console.error(message);
      throw new Error();
    }

    return instance;
  };
};
