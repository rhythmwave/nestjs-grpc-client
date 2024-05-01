import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import {
  ClientGrpc,
  GrpcMethod,
  GrpcStreamMethod,
} from '@nestjs/microservices';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { GetRencanaKegiatanRequest } from './interfaces/get-rencana-kegiatan-request.interface';
import { GetRencanaKegiatanResponse } from './interfaces/get-rencana-kegiatan-response.interface';

interface KegiatanService {
  GetRencanaKegiatan(data: GetRencanaKegiatanRequest): Observable<GetRencanaKegiatanResponse>;
}

@Controller('kegiatan')
export class KegiatanController implements OnModuleInit {
  private kegiatanService: KegiatanService;
  constructor(@Inject('KEGIATAN_PACKAGE') private readonly client: ClientGrpc) {}
  onModuleInit() {
    this.kegiatanService = this.client.getService<KegiatanService>('KegiatanService');
  }

  @Get()
  getMany(data: GetRencanaKegiatanRequest): Observable<GetRencanaKegiatanResponse> {

    console.log(data)
    const payload : GetRencanaKegiatanRequest = {
      gedung : 573,
      kodeAcuan : "AK.227.22.0",
      tahunAjaran : "2024/2025",
    }
    const stream = this.kegiatanService.GetRencanaKegiatan(payload);

    // const result : GetRencanaKegiatanResponse = {
    //   result : stream[0]["result"]
    // }
    return stream.pipe();
  }
}
