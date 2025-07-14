const categoryItems = document.querySelectorAll('.item');

categoryItems.forEach((item, index) => {
    const heading = item.querySelector('h2');
    const categoryName = heading.textContent;

    const nestedItems = item.querySelectorAll('ul li');
    const itemCount = nestedItems.length;

    console.log(`Category #${index + 1}: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});
