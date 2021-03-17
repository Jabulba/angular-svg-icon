import { InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { SvgLoader } from './svg-loader';
export declare const DEPLOY_URL: InjectionToken<string>;
export declare const SERVER_URL: InjectionToken<string>;
export declare class SvgIconRegistryService {
    private loader;
    private platformId;
    protected deployUrl: string;
    protected serverUrl: string;
    private _document;
    private document;
    private iconsByUrl;
    private iconsLoadingByUrl;
    private absoluteUrlRegExp;
    constructor(loader: SvgLoader, platformId: Object, deployUrl: string, serverUrl: string, _document: any);
    /** Add a SVG to the registry by passing a name and the SVG. */
    addSvg(name: string, data: string): void;
    /** Load a SVG to the registry from a URL. */
    loadSvg(url: string, name?: string): Observable<SVGElement>;
    /** Get loaded SVG from registry by name. (also works by url because of blended map) */
    getSvgByName(name: string): Observable<SVGElement>;
    /** Remove a SVG from the registry by URL (or name). */
    unloadSvg(url: string): void;
}
export declare function SVG_ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry: SvgIconRegistryService, loader: SvgLoader, platformId: object, deployUrl?: string, serverUrl?: string, document?: any): SvgIconRegistryService;
export declare const SVG_ICON_REGISTRY_PROVIDER: {
    provide: typeof SvgIconRegistryService;
    deps: (typeof SvgLoader | Optional[])[];
    useFactory: typeof SVG_ICON_REGISTRY_PROVIDER_FACTORY;
};
