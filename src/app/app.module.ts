import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatHeaderComponent } from './pages/chat/chat-header/chat-header.component';
import { ChatFooterComponent } from './pages/chat/chat-footer/chat-footer.component';
import { ChatBodyComponent } from './pages/chat/chat-body/chat-body.component';
import { ChatSidebarComponent } from './pages/chat/chat-sidebar/chat-sidebar.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, ChatComponent, ChatHeaderComponent, ChatFooterComponent, ChatBodyComponent, ChatSidebarComponent],
  imports: [BrowserModule,NgHeroiconsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
