import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleEffectDirective } from './components/ripple-effect/ripple-effect.directive';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';

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
