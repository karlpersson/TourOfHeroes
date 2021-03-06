import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';
import {AppRoutingModule} from '../app-routing.module';
import {HeroesComponent} from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import { HttpClientModule } from '@angular/common/http';
import {HeroSearchComponent} from '../hero-search/hero-search.component';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent,HeroesComponent,DashboardComponent, HeroSearchComponent ],
      imports: [FormsModule,AppRoutingModule,HttpClientModule],
      providers: [HeroService,MessageService,{ provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
