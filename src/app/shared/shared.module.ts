import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IconsModule } from './icons/icons.module';

import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ColorComponent } from './components/color/color.component';
import { TitleComponent } from './components/title/title.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    InputComponent,
    DropdownComponent,
    ColorsComponent,
    ColorComponent,
    TitleComponent,
    ProfileComponent,
    NotificationComponent,
    HeaderComponent,
    ActionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IconsModule,
  ],
  exports: [
    IconsModule,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    InputComponent,
    DropdownComponent,
    ColorsComponent,
    ColorComponent,
    TitleComponent,
    ProfileComponent,
    NotificationComponent,
    HeaderComponent,
    ActionsComponent,
  ],
})
export class SharedModule {}
