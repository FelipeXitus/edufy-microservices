import { JwtModule } from '@nestjs/jwt';
import type { StringValue } from 'ms';
import jwtConfig, { JwtConfig } from '../configuration/jwt.config';

export const ConfiguredJwtModule = JwtModule.registerAsync({
  useFactory: (config: JwtConfig) => ({
    global: true,
    secret: config.secret,
    signOptions: { expiresIn: config.expiration as StringValue },
  }),
  inject: [jwtConfig.KEY],
});
