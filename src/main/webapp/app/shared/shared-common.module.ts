import { NgModule } from '@angular/core';

import { PayOrchPocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PayOrchPocSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PayOrchPocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PayOrchPocSharedCommonModule {}
