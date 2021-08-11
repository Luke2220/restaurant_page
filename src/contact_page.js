function create_contact_page(){
    const menu = document.getElementsByClassName('menu')[0];
    const main = document.createElement('div');
    main.style.display = 'flex';
    main.style.flexDirection ='column';
    main.style.justifyContent = 'center';
    main.style.gridColumn = '1 / -1';
    main.style.margin = '0 auto';

    const hours = document.createElement('p');
    hours.textContent = 'Hours: Monday through Friday, 10am-6pm';

    const location = document.createElement('p');
    location.textContent = 'Address: 321 Sushi Street, Rice City, RN 00000'

    const email = document.createElement('p');
    email.textContent = 'Email: Rice@Shortgrain.com'

    main.appendChild(hours);
    main.appendChild(email);
    main.appendChild(location);

    menu.appendChild(main);
}
export {create_contact_page};