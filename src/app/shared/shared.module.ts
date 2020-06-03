import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { RippleEffectDirective } from './directives/ripple-effect/ripple-effect.directive';

@NgModule({
   declarations: [
      SettingsButtonComponent,
      RippleEffectDirective
   ],
   imports: [
      CommonModule
   ],
   exports: [
      SettingsButtonComponent,
      RippleEffectDirective
   ]
})
export class SharedModule { }
