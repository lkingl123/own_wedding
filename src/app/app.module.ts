import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FirebaseProvider } from 'src/providers/firebase/firebase';
import { VenueComponent } from './venue/venue.component';
import { HeroComponent } from './hero/hero.component';
import { CoupleComponent } from './couple/couple.component';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
import { GalleryComponent } from './gallery/gallery.component';
import { BiographyComponent } from './biography/biography.component';
import { LinkComponent } from './link/link.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RsvpFormComponent,
    VenueComponent,
    HeroComponent,
    CoupleComponent,
    GalleryComponent,
    BiographyComponent,
    LinkComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    NgVerticalTimelineModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [FormBuilder,FirebaseProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
