/*
 * SPDX-FileCopyrightText: 2020-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: LicenseRef-ONF-Member-1.0
 */
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RBAC_TARGET} from '../../../environments/environment';
import {
    ApiService,
    Service as RbacV100TargetService
} from '../../../openapi3/rbac/1.0.0/services';
import {RbacGroup as RbacV100TargetRbacGroup} from '../../../openapi3/rbac/1.0.0/models/rbac-group';
import {GroupDatasource} from './group-datasource';

@Component({
    selector: 'aether-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['../../common-profiles.component.scss']
})
export class GroupsListComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<RbacV100TargetRbacGroup>;
    dataSource: GroupDatasource;
    selectedGroup: RbacV100TargetRbacGroup;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        'groupid',
        'description',
        'rolecount',
        'edit',
        'delete'
    ];

    constructor(
        private rbacV100TargetService: RbacV100TargetService,
        private rbacApiService: ApiService,
        private snackBar: MatSnackBar,
    ) {
    }

    ngOnInit(): void {
        this.dataSource = new GroupDatasource(this.rbacV100TargetService, this.rbacApiService, RBAC_TARGET);
        this.openSnackBar('Loading data from ' + RBAC_TARGET);
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.dataSource.loadGroups();
    }

    deleteGroup(groupid: string): void {
        // TODO handle error
        this.dataSource.deleteGroup(groupid, this.snackBar);
        this.openSnackBar('Group ' + groupid + ' deleted');
    }

    openSnackBar(message: string): void {
        this.snackBar.open(message, undefined, {
            duration: 1000,
        });
    }

}