import { Injectable } from '@angular/core';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

declare interface IPageViewEvent {
    url: string;
}

export class ClickEvent {
  public constructor(
      public event: string,
      public category: string,
      public action?: string,
      public value?: string,
  ) {}
}

@Injectable()
export class AnalyticsService {

    public constructor() {
        window.dataLayer = window.dataLayer || [];
    }

    public trackPageView(pageView: IPageViewEvent) {
        window.dataLayer.push({
            event: 'pageview',
            ...pageView,
        });
    }

    public trackClickEvent(category: string, action: string, value?: string) {
        const dataObject = new ClickEvent('click', category, action);

        if (value) {
            dataObject.value = value;
        }

        window.dataLayer.push(dataObject);
    }

}
