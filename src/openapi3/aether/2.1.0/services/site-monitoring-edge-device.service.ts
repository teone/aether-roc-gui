// Code generated by openapi-gen. DO NOT EDIT.
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

import { SiteMonitoringEdgeDevice } from '../models/site-monitoring-edge-device';
import { SiteMonitoringEdgeDeviceList } from '../models/site-monitoring-edge-device-list';

@Injectable({
  providedIn: 'root',
})
export class SiteMonitoringEdgeDeviceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSiteMonitoringEdgeDeviceList
   */
  static readonly GetSiteMonitoringEdgeDeviceListPath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/monitoring/edge-device';

  /**
   * GET /site/{site-id}/monitoring/edge-device List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteMonitoringEdgeDeviceList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteMonitoringEdgeDeviceList$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<StrictHttpResponse<SiteMonitoringEdgeDeviceList>> {

    const rb = new RequestBuilder(this.rootUrl, SiteMonitoringEdgeDeviceService.GetSiteMonitoringEdgeDeviceListPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('site-id', params['site-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SiteMonitoringEdgeDeviceList>;
      })
    );
  }

  /**
   * GET /site/{site-id}/monitoring/edge-device List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteMonitoringEdgeDeviceList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteMonitoringEdgeDeviceList(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<SiteMonitoringEdgeDeviceList> {

    return this.getSiteMonitoringEdgeDeviceList$Response(params).pipe(
      map((r: StrictHttpResponse<SiteMonitoringEdgeDeviceList>) => r.body as SiteMonitoringEdgeDeviceList)
    );
  }

  /**
   * Path part for operation getSiteMonitoringEdgeDevice
   */
  static readonly GetSiteMonitoringEdgeDevicePath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/monitoring/edge-device/{edge-device-id}';

  /**
   * GET /site/{site-id}/monitoring/edge-device Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteMonitoringEdgeDevice()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteMonitoringEdgeDevice$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {edge-device-id}
     */
    'edge-device-id': any;
  }): Observable<StrictHttpResponse<SiteMonitoringEdgeDevice>> {

    const rb = new RequestBuilder(this.rootUrl, SiteMonitoringEdgeDeviceService.GetSiteMonitoringEdgeDevicePath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('site-id', params['site-id'], {});
      rb.path('edge-device-id', params['edge-device-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SiteMonitoringEdgeDevice>;
      })
    );
  }

  /**
   * GET /site/{site-id}/monitoring/edge-device Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteMonitoringEdgeDevice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteMonitoringEdgeDevice(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {edge-device-id}
     */
    'edge-device-id': any;
  }): Observable<SiteMonitoringEdgeDevice> {

    return this.getSiteMonitoringEdgeDevice$Response(params).pipe(
      map((r: StrictHttpResponse<SiteMonitoringEdgeDevice>) => r.body as SiteMonitoringEdgeDevice)
    );
  }

}