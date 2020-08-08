import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public pageList = [
        {
            iconName: 'home', displayText: 'Home',  url: '/home'
        },

        {
            iconName: 'flame', displayText: 'About Us',  url: '/about-us'  
        },

        {
            iconName: 'people', displayText: 'User Listing',  url: '/user-list'  
        },

        {
            iconName: 'person', displayText: 'Account', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'power', displayText: 'Login', url: '/login'},
                {iconName: 'person-add', displayText: 'Registration', url: '/registration'},
            ]
        },

        {
            iconName: 'mail-unread', displayText: 'Feedback',  url: '/feedback'  
        },
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
