import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const encrypt: boolean = process.env.DATABASE_ENCRYPT === 'true';
        const allowSSH: boolean = process.env.DATABASE_ALLOW_SSH === 'true';
        return {
          logging: false,
          type: 'postgres',
          synchronize: true,
          options: { encrypt: encrypt }, // true - Azure | false - local
          url: process.env.DATABASE_URL,
          migrations: ['dist/migrations/*{.ts,.js}'],
          entities: ['dist/api/**/*.entity{.ts,.js}'],
          //cli: { migrationsDir: 'src/migrations' }
          ssl: allowSSH,
          extra: allowSSH ? { ssl: { rejectUnauthorized: false } } : undefined,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}
