import { Module } from '@nestjs/common';
import { DuckModule } from './strategy/duck/duck.module';
import { GameModule } from './strategy/game/game.module';
import { ObserverModule } from './observer/observer.module';
import { FactoryModule } from './factory/factory.module';

@Module({ imports: [DuckModule, GameModule, ObserverModule, FactoryModule] })
export class AppModule {}
