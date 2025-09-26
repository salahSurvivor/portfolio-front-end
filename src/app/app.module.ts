import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PdfViewerModule } from 'ng2-pdf-viewer';

/***********PrimeNg*************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AnimateModule } from 'primeng/animate';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditorModule } from 'primeng/editor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { MenubarModule } from 'primeng/menubar';

/*********My Component**********/
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { MultipleImageComponent } from './dashbord/multiple-image/multiple-image.component';
import { PortfoliosComponent } from './dashbord/portfolios/portfolios.component';
import { HeaderComponent } from './dashbord/header/header.component';
import { MessagesComponent } from './dashbord/messages/messages.component';
import { CvComponent } from './dashbord/cv/cv.component';
import { LoginComponent } from './dashbord/login/login.component';
import { AutGuard } from './guards/aut.guard';

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'image',
    component: MultipleImageComponent
  },
  {
    path: 'portfolio',
    component: PortfoliosComponent,
    canActivate: [AutGuard]
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AutGuard]
  },
  {
    path: 'cv',
    component: CvComponent,
    canActivate: [AutGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultipleImageComponent,
    PortfoliosComponent,
    HeaderComponent,
    MessagesComponent,
    CvComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RadioButtonModule,
    GalleriaModule,
    InputTextareaModule,
    FileUploadModule,
    ToastModule,
    AnimateModule,
    BrowserAnimationsModule,  
    TableModule,
    ConfirmDialogModule,
    EditorModule,
    AngularEditorModule,
    AutoCompleteModule,
    DropdownModule,
    ReactiveFormsModule,
    ChipsModule,
    CheckboxModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    MenubarModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: false,          // 🔹 pour HTML5 routing (URLs normales)
      scrollPositionRestoration: 'enabled' // 🔹 bonus: revient en haut à chaque navigation
    })
  ],
  providers:[
              MessageService,
              ConfirmationService,
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
              JwtHelperService
            ],
  bootstrap: [AppComponent]
})
export class AppModule {}