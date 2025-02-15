/*
 * SPDX-FileCopyrightText: 2022-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, OnInit } from '@angular/core';
import { RocEditBase } from '../../roc-edit-base';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService, ORIGINAL, TYPE } from '../../basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpenPolicyAgentService } from '../../open-policy-agent.service';
import { SimCardDatasource } from '../sim-card/sim-card-datasource';
import { simCardModelPath } from '../../models-info';
import { EnterpriseService } from '../../enterprise.service';
import { SiteSimCard } from '../../../openapi3/aether/2.1.0/models';
import {
    SiteService,
    SiteSimCardService,
} from '../../../openapi3/aether/2.1.0/services';

@Component({
    selector: 'aether-sim-card-edit',
    templateUrl: './sim-card-edit.component.html',
    styleUrls: ['../../common-edit.component.scss'],
})
export class SimCardEditComponent
    extends RocEditBase<SimCardDatasource>
    implements OnInit
{
    data: SiteSimCard;
    pathListAttr = 'sim-card';
    simCardId: string;
    showParentDisplay = false;
    idAttr = 'sim-id';

    simCardForm = this.fb.group({
        'sim-id': [
            undefined,
            Validators.compose([
                Validators.pattern('[a-z]([a-z0-9-]?[a-z0-9])*'),
                Validators.minLength(1),
                Validators.maxLength(63),
            ]),
        ],
        'display-name': [
            undefined,
            Validators.compose([
                Validators.minLength(1),
                Validators.maxLength(80),
            ]),
        ],
        description: [
            undefined,
            Validators.compose([
                Validators.minLength(1),
                Validators.maxLength(1024),
            ]),
        ],
        iccid: [
            undefined,
            Validators.compose([
                Validators.pattern('([0-9]{18,21}[0-9A-F])'),
                Validators.minLength(19),
                Validators.maxLength(22),
            ]),
        ],
        imsi: [undefined],
    });

    constructor(
        private simCardService: SiteSimCardService,
        protected enterpriseService: EnterpriseService,
        protected siteService: SiteService,

        protected route: ActivatedRoute,
        protected router: Router,
        protected fb: FormBuilder,
        public bs: BasketService,
        public snackBar: MatSnackBar,
        public opaService: OpenPolicyAgentService
    ) {
        super(
            snackBar,
            bs,
            enterpriseService,
            siteService,
            route,
            new SimCardDatasource(enterpriseService, bs),
            simCardModelPath
        );
        super.form = this.simCardForm;
        super.loadFunc = this.loadSimCard;
    }

    ngOnInit(): void {
        super.init();
        this.simCardForm.get('imsi')[TYPE] = 'number';
    }

    closeShowParentCard(): void {
        this.showParentDisplay = false;
    }

    loadSimCard(simCardId: string): void {
        this.simCardService
            .getSiteSimCard({
                'enterprise-id': this.route.snapshot.params['enterprise-id'],
                'site-id': this.route.snapshot.params['site-id'],
                'sim-id': simCardId,
            })
            .subscribe(
                (value) => {
                    this.data = value;
                    this.simCardId = value['sim-id'];
                    this.populateFormData(value);
                },
                (error) => {
                    console.warn(
                        'Error getting SiteSimCard(s) for ',
                        this.enterpriseId,
                        this.siteId,
                        error
                    );
                },
                () => {
                    const basketPreview = this.bs.buildPatchBody().Updates;
                    const [hasUpdates, model] = this.datasource.hasUpdates(
                        basketPreview,
                        simCardModelPath,
                        this.data
                    );
                    if (hasUpdates) {
                        this.populateFormData(model as SiteSimCard);
                    }
                    console.log(
                        'Finished loading SiteSimCard(s)',
                        this.enterpriseId,
                        this.siteId,
                        simCardId
                    );
                }
            );
    }

    private populateFormData(value: SiteSimCard): void {
        if (value['sim-id']) {
            this.simCardForm.get('sim-id').setValue(value['sim-id']);
            this.simCardForm.get('sim-id')[ORIGINAL] = value['sim-id'];
        }
        if (value['display-name']) {
            this.simCardForm
                .get('display-name')
                .setValue(value['display-name']);
            this.simCardForm.get('display-name')[ORIGINAL] =
                value['display-name'];
        }
        if (value.description) {
            this.simCardForm.get('description').setValue(value.description);
            this.simCardForm.get('description')[ORIGINAL] = value.description;
        }
        if (value.iccid != null) {
            this.simCardForm.get('iccid').setValue(value['iccid']);
            this.simCardForm.get('iccid')[ORIGINAL] = value['iccid'];
        }
        if (value.imsi) {
            this.simCardForm.get('imsi').setValue(value.imsi);
            this.simCardForm.get('imsi')[ORIGINAL] = value.imsi;
        }
    }
}
