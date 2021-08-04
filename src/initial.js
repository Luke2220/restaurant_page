const initial = () => {
    const main = document.createElement('section');

    const headline = document.createElement('h1');
    headline.textContent = 'Restaurant Page';

    const main_image = document.createElement('img');
    main_image.src='https://static.wikia.nocookie.net/gundam/images/b/b6/White_Base_-_Front.jpg/revision/latest?cb=20201105140516';

    const info = document.createElement('p');
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere augue et vehicula imperdiet. Fusce aliquet congue malesuada. Pellentesque purus diam, vehicula ac sagittis a, condimentum eget mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pharetra enim ut nisi pulvinar pulvinar. Nunc suscipit elit id purus pharetra, a imperdiet lorem finibus. Sed convallis metus tortor, ac pellentesque libero luctus eget. Integer eleifend varius sapien quis tincidunt. Suspendisse a dui aliquam, tincidunt urna vitae, euismod arcu. Fusce elementum fermentum arcu vitae hendrerit. Curabitur nunc metus, accumsan a lacinia a, hendrerit iaculis neque. Aenean blandit augue ut nibh dapibus, eget bibendum elit ornare. ';
    main.appendChild(headline);
    main.appendChild(main_image);
    main.appendChild(info);
}

export {initial}
