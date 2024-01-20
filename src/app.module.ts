import { Module } from '@nestjs/common';
import { DuckModule } from './strategy/duck/duck.module';
import { GameModule } from './strategy/game/game.module';

@Module({ imports: [DuckModule, GameModule] })
export class AppModule {}
