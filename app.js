const menu = [
  {
    id: 1,
    title: "Themed bounce houses",
    category: "Bounce",
    price: 120.0,
    img: "./images/disney.png",
    desc: `Any theme that you can think of we have it! If we do not...we will get it. Celebrate the right way`
  },
  {
    id: 2,
    title: "Ride along",
    category: "Adults",
    price: 350.0,
    img: "./images/gokart.png",
    desc: `Do you love Go karting? Well this will be perfect for your next party. This can be a thrill 
    experience for adult parties. Where everyone can compete and make memories `
  },
  {
    id: 3,
    title: "Polar express ",
    category: "Kids",
    price: 150.0,
    img: "./images/train.png",
    desc: `A trackless train to give your party guess a view of your area`
  },
  {
    id: 4,
    title: "Crawl to the End obstacle course ",
    category: "Kids",
    price: 350.0,
    img: "./images/slide.png",
    desc: `Ready... Set...Go! A chance to compete and learn how to adjust to changing conditions and memorize the fastest way to progress through the obstacle course `
  },
  {
    id: 5,
    title: "Air Adventure Ride",
    category: "Activites",
    price: 350.0,
    img: "./images/hotair.png",
    desc: ` Have you always dreamed of riding in an hot air balloon? You are in luck. 
    We can get you ready for your experience with our inflatable hot air balloon ride.`
  },
  {
    id: 6,
    title: "Dance foam",
    category: "Adults",
    price: 250.0,
    img: "./images/foam.jpg",
    desc: `Add a twist to your next adult party with the dance foam pit. Book today to feel like a
    kid again `
  },
  {
    id: 7,
    title: "Games On The Go",
    category: "Multiplayer",
    price: 325.0,
    img: "./images/gametruck.jpg",
    desc: `For all th gamers, the game truck is just right for you. With
    systems from PS4, PS5 to Xbox.  `
  },
  {
    id: 8,
    title: "American football",
    category: "Activites",
    price: 95.0,
    img: "./images/football.png",
    desc: ` Don't miss out on your chance to show off throwing 
    skills. Get the inflatable game today!   `
  },
  {
    id: 9,
    title: "Rock climbing",
    category: "Multiplayer",
    price: 350.0,
    img: "./images/rock.png",
    desc: `Test your athletic skills and see how high can you go with our portable rock climbing
    wall `
  },
  {
    id: 10,
    title: "Fear Factor jump",
    category: "Bounce",
    price: 150.0,
    img: "./images/bull.png",
    desc: `Can you beat the speed? See how fast you can jump with our 
    Jump log inflatable.`
  }
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
