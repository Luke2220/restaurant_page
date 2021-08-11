import {tabMenu, get_tabs, set_tab_text} from './initial';
import { create_sushi_menu, create_nigiri_menu} from './sushi_page';
import {create_contact_page} from './contact_page';
import {create_home_page} from './home_page';
import background from './background2.jpg';



tabMenu();
switch_pages();
create_home_page();

function switch_pages(){
    document.body.style.backgroundImage = `url(${background})`;
    const tabNames = ['Home','Long Roll','Nigiri','Contact Us']
    const tabDivs = get_tabs();
    set_tab_text(tabNames);
    tabNames.forEach((element) =>{
        if (element == 'Home'){
            tabDivs[0].addEventListener('click', () => {create_home_page()});
        }
        else if (element == 'Long Roll'){
            tabDivs[1].addEventListener('click', () => {create_sushi_menu()});
        }
        else if (element=='Nigiri'){
           tabDivs[2].addEventListener('click', () => {create_nigiri_menu()});
        }
        else if (element=='Contact Us'){
            tabDivs[3].addEventListener('click', () => {create_contact_page()});
        }
    });
    
}
