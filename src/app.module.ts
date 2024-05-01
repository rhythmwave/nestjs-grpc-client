import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { KegiatanModule } from './kegiatan/kegiatan.module';

@Module({
  imports: [HeroModule, KegiatanModule],
})
export class AppModule {}
