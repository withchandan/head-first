import { Module } from '@nestjs/common';
import { DuckModule } from './duck/duck.module';

@Module({ imports: [DuckModule] })
export class AppModule {}
