function create_home_page(){
    const menu = document.getElementsByClassName('menu')[0];
    const home = document.createElement('div');

    home.style.gridColumn = '1 / -1';
    home.style.margin = '0 auto';

    const title = document.createElement('h1');
    title.textContent = 'Sushi Restaurant';
    const p = document.createElement('p');
    p.textContent = 'Welcome to Sushi Restaurant!'

    home.appendChild(title);
    home.appendChild(p);

    menu.appendChild(home);

}

export {create_home_page};