import { Module } from '@nestjs/common';

import { ObserverService } from './observer.service';

@Module({ providers: [ObserverService] })
export class ObserverModule {}
