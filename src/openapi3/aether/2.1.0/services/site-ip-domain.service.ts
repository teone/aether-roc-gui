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

import { SiteIpDomain } from '../models/site-ip-domain';
import { SiteIpDomainList } from '../models/site-ip-domain-list';

@Injectable({
  providedIn: 'root',
})
export class SiteIpDomainService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSiteIpDomainList
   */
  static readonly GetSiteIpDomainListPath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/ip-domain';

  /**
   * GET /site/{site-id}/ip-domain List.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteIpDomainList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteIpDomainList$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<StrictHttpResponse<SiteIpDomainList>> {

    const rb = new RequestBuilder(this.rootUrl, SiteIpDomainService.GetSiteIpDomainListPath, 'get');
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
        return r as StrictHttpResponse<SiteIpDomainList>;
      })
    );
  }

  /**
   * GET /site/{site-id}/ip-domain List.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteIpDomainList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteIpDomainList(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;
  }): Observable<SiteIpDomainList> {

    return this.getSiteIpDomainList$Response(params).pipe(
      map((r: StrictHttpResponse<SiteIpDomainList>) => r.body as SiteIpDomainList)
    );
  }

  /**
   * Path part for operation getSiteIpDomain
   */
  static readonly GetSiteIpDomainPath = '/aether/v2.1.x/{enterprise-id}/site/{site-id}/ip-domain/{ip-domain-id}';

  /**
   * GET /site/{site-id}/ip-domain Container.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSiteIpDomain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteIpDomain$Response(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {ip-domain-id}
     */
    'ip-domain-id': any;
  }): Observable<StrictHttpResponse<SiteIpDomain>> {

    const rb = new RequestBuilder(this.rootUrl, SiteIpDomainService.GetSiteIpDomainPath, 'get');
    if (params) {
      rb.path('enterprise-id', params['enterprise-id'], {});
      rb.path('site-id', params['site-id'], {});
      rb.path('ip-domain-id', params['ip-domain-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SiteIpDomain>;
      })
    );
  }

  /**
   * GET /site/{site-id}/ip-domain Container.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSiteIpDomain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSiteIpDomain(params: {

    /**
     * enterprise-id (target in onos-config)
     */
    'enterprise-id': any;

    /**
     * key {site-id}
     */
    'site-id': any;

    /**
     * key {ip-domain-id}
     */
    'ip-domain-id': any;
  }): Observable<SiteIpDomain> {

    return this.getSiteIpDomain$Response(params).pipe(
      map((r: StrictHttpResponse<SiteIpDomain>) => r.body as SiteIpDomain)
    );
  }

}
