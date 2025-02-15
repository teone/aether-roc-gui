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

import { SiteSimCard } from '../models/site-sim-card';
import { SiteSimCardList } from '../models/site-sim-card-list';

@Injectable({
  providedIn: 'root',
})
export class SiteSimCardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSiteSimCardList
   */
  static readonly GetSiteSimCardListPath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/sim-card';

  /**
   * GET /site/{site-id}/sim-card List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteSimCardList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteSimCardList$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<StrictHttpResponse<SiteSimCardList>> {

    const rb = new RequestBuilder(this.rootUrl, SiteSimCardService.GetSiteSimCardListPath, 'get');
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
        return r as StrictHttpResponse<SiteSimCardList>;
      })
    );
  }

  /**
   * GET /site/{site-id}/sim-card List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteSimCardList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteSimCardList(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<SiteSimCardList> {

    return this.getSiteSimCardList$Response(params).pipe(
      map((r: StrictHttpResponse<SiteSimCardList>) => r.body as SiteSimCardList)
    );
  }

  /**
   * Path part for operation getSiteSimCard
   */
  static readonly GetSiteSimCardPath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/sim-card/{sim-id}';

  /**
   * GET /site/{site-id}/sim-card Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteSimCard()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteSimCard$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {sim-id}
     */
    'sim-id': any;
  }): Observable<StrictHttpResponse<SiteSimCard>> {

    const rb = new RequestBuilder(this.rootUrl, SiteSimCardService.GetSiteSimCardPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('site-id', params['site-id'], {});
      rb.path('sim-id', params['sim-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SiteSimCard>;
      })
    );
  }

  /**
   * GET /site/{site-id}/sim-card Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteSimCard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteSimCard(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {sim-id}
     */
    'sim-id': any;
  }): Observable<SiteSimCard> {

    return this.getSiteSimCard$Response(params).pipe(
      map((r: StrictHttpResponse<SiteSimCard>) => r.body as SiteSimCard)
    );
  }

}
