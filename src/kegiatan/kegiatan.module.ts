import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { KegiatanController } from './kegiatan.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KEGIATAN_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [KegiatanController],
})
export class KegiatanModule {}
