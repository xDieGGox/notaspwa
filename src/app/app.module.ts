import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroments } from './enviroments/enviroments.';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MenuComponent } from './menu/menu/menu.component';
import { NotaComponent } from './pages/nota/nota.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ListaNotasComponent } from './pages/lista-notas/lista-notas.component';
import { ViewNotaComponent } from './pages/view-nota/view-nota.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotaComponent,
    ListaNotasComponent,
    ViewNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    provideFirebaseApp(() => initializeApp(enviroments.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: enviroments.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
