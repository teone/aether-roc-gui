// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { Failure } from './failure';
import { TransactionPhaseStatus } from './transaction-phase-status';
import { ValidatePhaseState } from './validate-phase-state';
export interface TransactionValidatePhase {
  failure?: Failure;
  state?: ValidatePhaseState;
  status?: TransactionPhaseStatus;
}