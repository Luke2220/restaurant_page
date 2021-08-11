const tab_array = createElements(4,'button');

const tabMenu = () => {
    const main = document.createElement('section');
   
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    main.style.minHeight = '50px';
    main.style.marginBottom = '10px';

    const headline = document.createElement('h1');
    headline.textContent = 'Restaurant Page';
    
    const gridBack = document.createElement('div');
    gridBack.style.backgroundColor = 'RGB(0, 158, 145)'
    gridBack.style.minHeight = '100%';
    gridBack.style.margin = '0 auto';
    gridBack.style.maxWidth = '75%';
    gridBack.style.borderRadius = '10px';
    

    const grid = document.createElement('section');
    grid.classList.add('menu');
    grid.style.display = 'grid';
    grid.style.justifyContent = 'center';
    grid.style.alignItems = 'center';
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    grid.style.gridGap = '10px';
    grid.style.margin = '0 5px';
    grid.style.padding = '10px 0';

    tab_array.forEach((tab,index) => {
        tab.addEventListener('click', () =>{clear_menu()});
        tab.style.minWidth = '125px';
        tab.style.minHeight = '100%';
        tab.textContent = 'PlaceHolder';
        tab.style.color = 'black';
        tab.style.border = 'none';
        tab.style.borderRight = '1px solid black'
        if (index == tab_array.length-1){tab.style.borderRight = 'none'}
        tab.style.backgroundImage = 'linear-gradient(to bottom right, teal, grey)';
        main.appendChild(tab);
    });

  
    gridBack.appendChild(grid);
    
    
    document.body.appendChild(main);
    document.body.appendChild(gridBack);
}



function clear_menu(){
   let menu = document.getElementsByClassName('menu')[0];
   let length = menu.children.length-1;
    for (let i = length;i>-1;i--){
        menu.children.item(i).remove();
        console.log(menu.children);
    }
}

function get_tabs(){
    return tab_array;
}

function set_tab_text(name_arry){
    tab_array.forEach ((tab,i) =>{
        tab.textContent = name_arry[i];
    })
}

function createElements(amount,element){
    let arry = [];
    for (let i = 0;i<amount;i++){
        arry.push(document.createElement(element));
    }
    return arry;
}

export {tabMenu, get_tabs, set_tab_text}
