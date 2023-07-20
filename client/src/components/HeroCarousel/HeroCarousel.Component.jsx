/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";
import { Typography, Button } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
const HeroCarousel = () => {
  const [images] = useState([
    {
      adult: false,
      backdrop_path: "/tQ91wWQJ2WRNDXwxuO7GCXX5VPC.jpg",
      genre_ids: [878, 28, 12],
      id: 76600,
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      popularity: 4109.455,
      poster_path: "/94xxm5701CzOdJdUEdIuwqZaowx.jpg",
      release_date: "2022-12-14",
      title: "Avatar: The Way of Water",
      video: false,
      vote_average: 8.1,
      vote_count: 1001,
    },
    {
      adult: false,
      backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre_ids: [28, 14, 878],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 3189.94,
      poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 7.2,
      vote_count: 3170,
    },
    {
      adult: false,
      backdrop_path: "/vSvogVWimBiaKx9dVCzirh3u9qS.jpg",
      genre_ids: [16, 14, 18],
      id: 555604,
      original_language: "en",
      original_title: "Guillermo del Toro's Pinocchio",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      popularity: 2769.264,
      poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      release_date: "2022-11-09",
      title: "Guillermo del Toro's Pinocchio",
      video: false,
      vote_average: 8.5,
      vote_count: 909,
    },
    {
      adult: false,
      backdrop_path: "/sfw4m2tOgQRzhF6VXxaXGfd1vX.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 19995,
      original_language: "en",
      original_title: "Avatar",
      overview:
        "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      popularity: 2698.181,
      poster_path: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      release_date: "2009-12-15",
      title: "Avatar",
      video: false,
      vote_average: 7.5,
      vote_count: 27099,
    },
    {
      adult: false,
      backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      genre_ids: [28, 18, 36],
      id: 724495,
      original_language: "en",
      original_title: "The Woman King",
      overview:
        "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
      popularity: 1975.04,
      poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      release_date: "2022-09-15",
      title: "The Woman King",
      video: false,
      vote_average: 7.8,
      vote_count: 815,
    },
    {
      adult: false,
      backdrop_path: "/7dm64SW5L5CCg47kAEAcdCGaq5i.jpg",
      genre_ids: [27, 53],
      id: 676547,
      original_language: "en",
      original_title: "Prey for the Devil",
      overview:
        "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
      popularity: 2089.842,
      poster_path: "/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg",
      release_date: "2022-10-23",
      title: "Prey for the Devil",
      video: false,
      vote_average: 6.5,
      vote_count: 138,
    },
    {
      adult: false,
      backdrop_path: "/zNE4oUkZnpbCpFiJbbaX4YJOPmE.jpg",
      genre_ids: [28, 80],
      id: 1024546,
      original_language: "en",
      original_title: "Detective Knight: Rogue",
      overview:
        "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
      popularity: 1519.457,
      poster_path: "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
      release_date: "2022-10-21",
      title: "Detective Knight: Rogue",
      video: false,
      vote_average: 6.2,
      vote_count: 22,
    },
    {
      adult: false,
      backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      popularity: 1313.151,
      poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      video: false,
      vote_average: 7.5,
      vote_count: 1415,
    },
    {
      adult: false,
      backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
      genre_ids: [14, 28, 35, 80],
      id: 1013860,
      original_language: "en",
      original_title: "R.I.P.D. 2: Rise of the Damned",
      overview:
        "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
      popularity: 1163.751,
      poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
      release_date: "2022-11-15",
      title: "R.I.P.D. 2: Rise of the Damned",
      video: false,
      vote_average: 6.7,
      vote_count: 265,
    },
    {
      adult: false,
      backdrop_path: "/AokFVAl1JVooW1uz2V2vxNUxfit.jpg",
      genre_ids: [36, 28, 18],
      id: 551271,
      original_language: "en",
      original_title: "Medieval",
      overview:
        "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
      popularity: 952.738,
      poster_path: "/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg",
      release_date: "2022-09-08",
      title: "Medieval",
      video: false,
      vote_average: 7.2,
      vote_count: 233,
    },
    {
      adult: false,
      backdrop_path: "/ypFD4TJ3nLJesou76V59CnweaT0.jpg",
      genre_ids: [36, 18, 53, 28],
      id: 715931,
      original_language: "en",
      original_title: "Emancipation",
      overview:
        "Inspired by the gripping true story of a man who would do anything for his family—and for freedom. When Peter, an enslaved man, risks his life to escape and return to his family, he embarks on a perilous journey of love and endurance.",
      popularity: 778.142,
      poster_path: "/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg",
      release_date: "2022-12-02",
      title: "Emancipation",
      video: false,
      vote_average: 8.2,
      vote_count: 416,
    },
    {
      adult: false,
      backdrop_path: "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
      genre_ids: [28, 80, 9648, 53],
      id: 829799,
      original_language: "en",
      original_title: "Paradise City",
      overview:
        "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
      popularity: 724.534,
      poster_path: "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
      release_date: "2022-11-11",
      title: "Paradise City",
      video: false,
      vote_average: 5.9,
      vote_count: 46,
    },
    {
      adult: false,
      backdrop_path: "/xiJJJTPA3AQjsMGH56GRU9tuzHa.jpg",
      genre_ids: [27, 9648, 53],
      id: 880841,
      original_language: "en",
      original_title: "Abandoned",
      overview:
        "After a young couple moves into a remote farmhouse with their infant son, the woman's struggles with postpartum psychosis begin to intensify... as the house reveals secrets of its own.",
      popularity: 749.149,
      poster_path: "/cO9ywQ2AMHM9EoBJsJGH1Gl9U5L.jpg",
      release_date: "2022-06-17",
      title: "Abandoned",
      video: false,
      vote_average: 6.6,
      vote_count: 109,
    },
    {
      adult: false,
      backdrop_path: "/vNuHqmOJRQXY0PBd887DklSDlBP.jpg",
      genre_ids: [16, 12, 35, 10751, 14],
      id: 315162,
      original_language: "en",
      original_title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      popularity: 785.377,
      poster_path: "/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
      release_date: "2022-12-07",
      title: "Puss in Boots: The Last Wish",
      video: false,
      vote_average: 8,
      vote_count: 73,
    },
    {
      adult: false,
      backdrop_path: "/5aSvzECXrtABcIh7fZYkH2K6ttC.jpg",
      genre_ids: [28, 53, 80],
      id: 972313,
      original_language: "en",
      original_title: "Blowback",
      overview:
        "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
      popularity: 602.053,
      poster_path: "/fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
      release_date: "2022-06-17",
      title: "Blowback",
      video: false,
      vote_average: 5.9,
      vote_count: 29,
    },
    {
      adult: false,
      backdrop_path: "/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg",
      genre_ids: [16, 10751, 14, 18],
      id: 1001865,
      original_language: "en",
      original_title: "Scrooge: A Christmas Carol",
      overview:
        "On a cold Christmas Eve, selfish miser Ebenezer Scrooge has one night left to face his past — and change the future — before time runs out.",
      popularity: 590.7,
      poster_path: "/nOrnzHn9SCF6JTXfX02eSPyAAXL.jpg",
      release_date: "2022-11-18",
      title: "Scrooge: A Christmas Carol",
      video: false,
      vote_average: 7.3,
      vote_count: 126,
    },
    {
      adult: false,
      backdrop_path: "/g9Kb3RaLjsybI1jpqHQ3QZTCYpB.jpg",
      genre_ids: [28, 35, 80, 53],
      id: 899112,
      original_language: "en",
      original_title: "Violent Night",
      overview:
        "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
      popularity: 905.671,
      poster_path: "/1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
      release_date: "2022-11-30",
      title: "Violent Night",
      video: false,
      vote_average: 7.6,
      vote_count: 276,
    },
    {
      adult: false,
      backdrop_path: "/tlin6STxxVoln0f818sEQYH7PyC.jpg",
      genre_ids: [27, 53],
      id: 663712,
      original_language: "en",
      original_title: "Terrifier 2",
      overview:
        "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      popularity: 548.803,
      poster_path: "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
      release_date: "2022-10-06",
      title: "Terrifier 2",
      video: false,
      vote_average: 7,
      vote_count: 778,
    },
    {
      adult: false,
      backdrop_path: "/c1bz69r0v065TGFA5nqBiKzPDys.jpg",
      genre_ids: [35, 10751, 10402],
      id: 830784,
      original_language: "en",
      original_title: "Lyle, Lyle, Crocodile",
      overview:
        "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
      popularity: 576.19,
      poster_path: "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
      release_date: "2022-10-07",
      title: "Lyle, Lyle, Crocodile",
      video: false,
      vote_average: 7.8,
      vote_count: 199,
    },
    {
      adult: false,
      backdrop_path: "/m1KW4Qcr6Qudqx058CpQK9IgGr8.jpg",
      genre_ids: [],
      id: 772446,
      original_language: "es",
      original_title: "No Abras La Puerta",
      overview:
        "Fausto and Esther childhood was tormented. Fausto, trying to escape from his father. Esther, mistreated by her brother-in-law. They both begin to be involved in a supernatural situation. Over which they have no control.",
      popularity: 509.422,
      poster_path: "/p3c23qNXEhTNhLP6Q1E00Z3ZtQv.jpg",
      release_date: "2022-11-30",
      title: "No Abras La Puerta",
      video: false,
      vote_average: 7.1,
      vote_count: 15,
    },
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="relative h-56 w-full md:h-80 py-2" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="image 2"
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute pt-5 inset-0 grid items-cente my-2 rounded-md bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="md:mb-4 text-lg md:text-4xl lg:text-5xl"
                  >
                    <span>{images.original_title.substring(0, 22)}</span>
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className=" opacity-80 mb-4 text-sm"
                  >
                    {images.overview.substring(0, 80)}...
                  </Typography>

                  <Typography
                    color="white"
                    className="flex items-center gap-1.5 text-sm font-normal mb-4"
                  >
                    <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                    {images.vote_average}
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="sm" color="white">
                      Explore
                    </Button>
                    <Button size="sm" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="relative h-[35rem] w-full px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="image 2"
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute pt-[10rem] inset-0 grid my-3 mx-2 rounded-md bg-black/75 items-cente ">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    <span>{images.original_title}</span>
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className=" opacity-80 mb-4"
                  >
                    {images.overview}
                  </Typography>

                  <Typography
                    color="white"
                    className="flex items-center gap-1.5 font-normal mb-4"
                  >
                    <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                    {images.vote_average}
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
