import eel from './eel.jpg';
import heaven from './heaven.jpg';
import tuna from './tuna.jpg';
import salmon from './salmon.jpg';

import monster from './monster.jpg';
import phoenix from './phoenix.jpg';
import dragon from './dragon.jpg';
import covington from './covington.jpg';
import rainbow from './rainbow.jpg';
import sonic from './sonic.jpg';

function create_menu(text_arry){
    const menu = document.getElementsByClassName('menu')[0];
    
    for (let i = 0;i<text_arry.length;i++){
        menu.appendChild(create_menu_item(text_arry[i].split(';;')))
    }
    return menu;
}

function create_menu_item(item_info){
        let title = item_info[0];
        let content = item_info[1];
        let img = item_info[2];
        console.log(item_info[2]);
        const item = document.createElement('div');
        const item_img = document.createElement('img');
        const item_title = document.createElement('h2');
        const item_content = document.createElement('p');

        item_img.style.float = 'left';
        item_img.style.maxWidth = '300px'
        item_img.style.maxHeight = '300px'
        item_img.style.marginRight = '5px';
        item_img.src = img;

        item_title.textContent = title;
        item_content.textContent = content;
        item.appendChild(item_img);
        item.appendChild(item_title);
        item.appendChild(item_content);
        return item;
}

const create_sushi_menu = () =>{
    create_menu(['Rainbow Roll;;Crab stick, cucumber, topped with tuna, salmon, yellowtail, & avocado;;'+rainbow,
    'Dragon;;shrimp & cucumber covered with eel, avocado & teriyaki;;'+dragon,
    'Covington;;Tempura shrimp, tempura asparagus, spicy crab & cucumber covered in tuna with a special sauce, teriyaki, & green onion;;'+covington,
    'Monster;;tempura shrimp, spicy crab & cucumber. rolled in tempura crumbs & topped with eel.;;'+monster,
    'Phoenix;;grilled salmon, cucumber, avocado, spicy sauce & japanese pepper;;'+phoenix,
    'Sonic;;tempura salmon in garlic sauce with cucumber & tobiko;;'+sonic]);
}


const create_nigiri_menu = () =>{
    create_menu(['Fresh Water Eel Nigiri;;Unagi on a bed of rice.;;'+eel,
    'Heaven Nigiri;;grilled sea scallop with spicy sauce, green onion & tobiko;;'+heaven,
    'Salmon Nigiri;;Salmon on a bed of rice.;;'+salmon,
    'Tuna Nigiri;;Tuna on a bed of rice.;;'+tuna]);
}

export {create_sushi_menu, create_nigiri_menu};