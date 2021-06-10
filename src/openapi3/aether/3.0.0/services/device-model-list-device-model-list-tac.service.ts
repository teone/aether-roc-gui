// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DeviceModelListDeviceModelListTac } from '../models/device-model-list-device-model-list-tac';

@Injectable({
  providedIn: 'root',
})
export class DeviceModelListDeviceModelListTacService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDeviceModelListDeviceModelListTac
   */
  static readonly GetDeviceModelListDeviceModelListTacPath = '/aether/v3.0.0/{target}/device-model-list/device-model-list/{id}/tac/{tac}';

  /**
   * GET /device-model-list/device-model-list/{id}/tac Generated from YANG model.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeviceModelListDeviceModelListTac()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceModelListDeviceModelListTac$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {tac}
     */
    tac: any;
  }): Observable<StrictHttpResponse<DeviceModelListDeviceModelListTac>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceModelListDeviceModelListTacService.GetDeviceModelListDeviceModelListTacPath, 'get');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('tac', params.tac, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceModelListDeviceModelListTac>;
      })
    );
  }

  /**
   * GET /device-model-list/device-model-list/{id}/tac Generated from YANG model.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeviceModelListDeviceModelListTac$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceModelListDeviceModelListTac(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {tac}
     */
    tac: any;
  }): Observable<DeviceModelListDeviceModelListTac> {

    return this.getDeviceModelListDeviceModelListTac$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceModelListDeviceModelListTac>) => r.body as DeviceModelListDeviceModelListTac)
    );
  }

}