import {Component, Input, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {SideMenuOption} from './models/side-menu-option';

@Component({
    selector: 'custom-side-menu',
    templateUrl: './custom-side-menu.component.html',
    styleUrls: ['./custom-side-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSideMenuComponent {
    optionHeight = 45;
    paddingLeft = 16;
    @Input() menuList: Array<SideMenuOption>;

    isLogin:any;

    constructor(    
            private router: Router,
        ) 
    {
        if(localStorage.getItem('user_data'))
        {
            this.isLogin = '1';
        }
        else
        {
            this.isLogin = '0';
            // console.log('logout');
        }
    }

    toggle(item) {
        item.expanded = !item.expanded;
    }

    logout()
    {
        console.log('make logout');

        localStorage.clear();
        this.router.navigate(['/home']);
        location.reload();
    }


}
