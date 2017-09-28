import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UpcomingPage } from '../upcoming/upcoming';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UpcomingPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
