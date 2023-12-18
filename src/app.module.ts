import { Module } from '@nestjs/common';
import { DuckModule } from './duck/duck.module';
import { GameModule } from './game/game.module';

@Module({ imports: [DuckModule, GameModule] })
export class AppModule {}
