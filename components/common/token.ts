import {InjectionToken} from "@angular/core";
import {StateAccessor} from "./state-register";

export const CHART = new InjectionToken<any>('CHART');

export const CHART_ACCESSOR = new InjectionToken<StateAccessor>('CHART_ACCESSOR');
