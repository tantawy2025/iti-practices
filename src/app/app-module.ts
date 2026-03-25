import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { SideBar } from './components/side-bar/side-bar';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Header, NavBar, SideBar, Products, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
