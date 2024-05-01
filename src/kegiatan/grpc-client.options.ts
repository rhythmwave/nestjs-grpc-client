import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:9200',
    package: 'proto', // ['hero', 'hero2']
    protoPath: join(__dirname, './kegiatan.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
