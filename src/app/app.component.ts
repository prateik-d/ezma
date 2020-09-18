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
    
   pageList:any;
    // this.a = localStorage.getItem('user_data');
    

    
   

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {

        if(localStorage.getItem('user_data'))
        {
            this.pageList = [
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
                    iconName: 'person', displayText: 'Profile',  url: '/profile'  
                },
        
                {
                    iconName: 'mail-unread', displayText: 'Feedback',  url: '/feedback'  
                },

                {
                    iconName: 'people', displayText: 'User Request',  url: '/request'  
                },
        
                // {
                //     iconName: 'log-out', displayText: 'Logout',  url: '/logout'  
                // },
            ];
        }
        else
        {
            this.pageList = [
                {
                    iconName: 'home', displayText: 'Home',  url: '/home'
                },
                {
                    iconName: 'flame', displayText: 'About Us',  url: '/about-us'  
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
        }

        

        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
