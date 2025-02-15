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

import { ApplicationEndpoint } from '../models/application-endpoint';
import { ApplicationEndpointList } from '../models/application-endpoint-list';
import { ApplicationEndpointMbr } from '../models/application-endpoint-mbr';

@Injectable({
  providedIn: 'root',
})
export class ApplicationEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApplicationEndpointList
   */
  static readonly GetApplicationEndpointListPath = '/aether/v2.1.x/{enterprise-id}/application/{application-id}/endpoint';

  /**
   * GET /application/{application-id}/endpoint List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationEndpointList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpointList$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;
  }): Observable<StrictHttpResponse<ApplicationEndpointList>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationEndpointService.GetApplicationEndpointListPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('application-id', params['application-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationEndpointList>;
      })
    );
  }

  /**
   * GET /application/{application-id}/endpoint List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApplicationEndpointList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpointList(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;
  }): Observable<ApplicationEndpointList> {

    return this.getApplicationEndpointList$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationEndpointList>) => r.body as ApplicationEndpointList)
    );
  }

  /**
   * Path part for operation getApplicationEndpoint
   */
  static readonly GetApplicationEndpointPath = '/aether/v2.1.x/{enterprise-id}/application/{application-id}/endpoint/{endpoint-id}';

  /**
   * GET /application/{application-id}/endpoint Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationEndpoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpoint$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;

    /**
     * key {endpoint-id}
     */
    'endpoint-id': any;
  }): Observable<StrictHttpResponse<ApplicationEndpoint>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationEndpointService.GetApplicationEndpointPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('application-id', params['application-id'], {});
      rb.path('endpoint-id', params['endpoint-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationEndpoint>;
      })
    );
  }

  /**
   * GET /application/{application-id}/endpoint Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApplicationEndpoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpoint(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;

    /**
     * key {endpoint-id}
     */
    'endpoint-id': any;
  }): Observable<ApplicationEndpoint> {

    return this.getApplicationEndpoint$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationEndpoint>) => r.body as ApplicationEndpoint)
    );
  }

  /**
   * Path part for operation getApplicationEndpointMbr
   */
  static readonly GetApplicationEndpointMbrPath = '/aether/v2.1.x/{enterprise-id}/application/{application-id}/endpoint/{endpoint-id}/mbr';

  /**
   * GET /application/{application-id}/endpoint/{endpoint-id}/mbr Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationEndpointMbr()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpointMbr$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;

    /**
     * key {endpoint-id}
     */
    'endpoint-id': any;
  }): Observable<StrictHttpResponse<ApplicationEndpointMbr>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationEndpointService.GetApplicationEndpointMbrPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('application-id', params['application-id'], {});
      rb.path('endpoint-id', params['endpoint-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationEndpointMbr>;
      })
    );
  }

  /**
   * GET /application/{application-id}/endpoint/{endpoint-id}/mbr Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApplicationEndpointMbr$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationEndpointMbr(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {application-id}
     */
    'application-id': any;

    /**
     * key {endpoint-id}
     */
    'endpoint-id': any;
  }): Observable<ApplicationEndpointMbr> {

    return this.getApplicationEndpointMbr$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationEndpointMbr>) => r.body as ApplicationEndpointMbr)
    );
  }

}
