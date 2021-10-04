// local reviews data
const reviews = [
    {
      id: 1,
      name: "1. Arceus",
      img:
        "/img/arceus.jpg",
      text:
        "Not only is Arceus stronger than the overwhelming majority of other Pokemon, but the genderless God Pokemon also has the beating of all but six of their Mega Evolution forms. Assuming the Pokemon gets a Mega Evolution of its own in the Diamond & Pearl remakes later this year, it will become the outright strongest obtainable Pokemon by a considerable margin."
    },
    {
      id: 2,
      name: "2. Zamazenta",
      img:
        "/img/zamazenta.jpg",
      text:
        "Much like Zacian, Zamazenta starts life with a base stat total of 670 which can be increased to 720 with the aid of a held item. Rather than a Rusted Sword, however, Zamazenta instead needs to be given a Rusted Shield which will lead to the Pokemon transforming into its Crowned Shield form."
    },
    {
      id: 3,
      name: "3. Zacian",
      img:
        "img/Zacian.jpg",
      text:
        "In its Hero of Many Battles form, Zacian is actually a little weaker than quite a few of its Legendary peers. While holding a Rusted Sword though, its base stat total is boosted by 50 points, bringing it up to an impressive 720. In this form, it finds itself locked in a three-way tie for the title of the series most powerful Pokemon."
    },
    {
      id: 4,
      name: "4. Zygarde",
      img:
        "img/Zygarde.jpg",
      text:
        "Upon its introduction in Pokemon X & Y, Zygarde was really wasn't anything to write home about. With Sun & Moon came the addition of the Pokemon's Complete form, however, and it was catapulted up the pecking order of the series' most powerful Pokemon of all time."
    },
    {
      id: 5,
      name: "5. Kyurem",
      img:
        "img/kyurem.jpg",
      text:
      "The innovative fusion mechanic introduced in the fifth generation of Pokemon games is one that has not been utilized nearly as much as it should have been in subsequent games. It did, however, lead to the introduction of Black Kyurem and White Kyurem."
    },
    {
      id: 6,
      name: "6. Eternatus",
      img:
        "img/Eternatus.jpg",
      text:
        "First introduced in Pokemon Sword & Shield, Eternatus is an incredibly powerful Pokemon with a base stat total of 690. It may not be the strongest in this regard, but it's perhaps worth noting that there is only one other Pokemon that can reach a higher total without the use of an item or a fusion technique. Besides, this is only the tip of the iceberg."
    },
    {
      id: 7,
      name: "7. Rayquaza",
      img:
        "img/Rayquaza.jpg",
      text:
      "Rayquaza might not be the fastest Pokemon out there, but its 150 physical and special attack stats are right up there with the very best. They account for almost half of the Pokemon's 680 base stat total; which rises to an eye-watering 780 when the Pokemon Mega Evolves."
    },
    {
      id: 8,
      name: "8. Mewtwo",
      img:
        "img/Mewtwo.jpg",
      text:
        "Together with Rayquaza, Mewtwo is considered to be the most powerful Pokemon obtainable in the series, at least when it comes to Mega Evolutions, anyway. By default, they each have base stat totals of 680, but in their powered-up forms, this rises to an impressive 780."
    },
    {
      id: 9,
      name: "9. Ho-Oh",
      img:
        "img/Ho-Oh.jpg",
      text:
        "Like many of the series' earlier Legendary Pokemon, Ho-Oh rocks a base stat total of 680. It excels in the special defense department, although also has decent numbers in the attack and special attack categories as well. It shares its design with a real-world mythical creature too, which is a pretty cool – albeit, somewhat irrelevant – touch.",
    },
    {
      id: 10,
      name: "10. Giratina",
      img:
        "img/Giratina.jpg",
      text:
        "Whether in its Origin or Altered form, Giratina boasts an impressive base stat total of 680. It's actually one of 16 Legendary Pokemon that does so, although it is arguably one of the more useful of the bunch thanks to its impressive versatility in battle.",
    },
    {
      id: 11,
      name: "11. Lugia",
      img:
        "img/Lugia.jpg",
      text:
        "Though not quite as popular as its fellow gen 2 mascot, Ho-Oh, Lugia is still an incredibly useful Pokemon to have on one's team; assuming, that is, that players can find one. It has access to some great psychic and flying-type moves and can also cover water and ice-type attacks if push really comes to shove.",
    },
    {
      id: 12,
      name: "12. Dialga",
      img:
        "img/Dialga.jpg",
      text:
        "Much like its fellow gen 4 legendary, Dialga has been blessed with two types. As well as being a dragon-type Pokemon, it also has access to Steel-type moves and is once again among the very best in class for both types. If ever the Pokemon gets a Mega Evolution or a primal form like it did in Mystery Dungeon, it would be right up there with the very strongest Legendary Pokemon in the series."
    },
    {
      id: 13,
      name: "13. Palkia",
      img:
        "img/Palkia.jpg",
      text:
        "Palkia's dual-typing can at times be a bit of a double-edged sword, though it ranks among the very best in both the water and dragon-type categories. Its 680 stats are distributed fairly evenly, but it does lean a little more towards special attacks than it does physical ones."
    },
    {
      id: 14,
      name: "14. Groudon",
      img:
        "img/Groudon.jpg",
      text:
        "Much like Kyogre, Groudon is only able to transform into its primal form in the remakes of Pokemon Ruby & Sapphire. Again though, just like its partner in prime, it can still be incredibly effective even without the additional power that it gains while in its enhanced primal form."
    },
    {
      id: 15,
      name: "15. Kyogre",
      img:
        "img/Kyogre.jpg",
      text:
        "When it comes to special attack and defense, Kyogre is an absolute beast. To be more precise, it's a Primal Beast, and, as such, is able to transform into its primal form when holding a Blue Orb. This transformation increases its base stat total to a whopping 770, with its special attack and defense stats rising further to an impressive 180 and 160 respectively."
    }
  ];
  
  

//   select items
const img  = document.getElementById("pokemon-img")
const author = document.getElementById("author")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 0;




// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPokemon()
})

// show pokemon based on item

function showPokemon() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
}

// BUTTONS

// show next pokemon

nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPokemon()
})

// show prev pokemon

prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1  }
  showPokemon()
})

// show random pokemon
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPokemon()
})