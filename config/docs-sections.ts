import { Route, Section } from "@/types";

export const docsSections: Section[] = [
  {
    section: "Discord virus24",
    routes: [
      { title: "Discord virus24", path: "/doc/discord-virus24" },
      { title: "ProfileCard", path: "/doc/Profile" },
      { title: "WelcomeCard", path: "/doc/Welcome" },
      { title: "GoodbyCard", path: "/doc/Goodbye" },
      { title: "FireSmokeCard", path: "/doc/FireSmoke" },
      { title: "FireCard", path: "/doc/Fire" },
      { title: "HeartsCard", path: "/doc/Hearts" },
      { title: "PetPetCard", path: "/doc/PetPet" },


    ],
  }, 
  {
    section: "Virus Nsfw",
    routes: [

      { title: "Filter", path: "/doc/Filter" },


    ],
  }, 
  {
    section: "Virus Back",
    routes: [
      { title: "Virus Back", path: "/doc/virus-back" }

    ],
  }, 
  {
    section: "Discord Bot Genrator",
    routes: [
      { title: "Bot Genrator", path: "/doc/bot-genrator" }
    ],
  }, 
	
  {
    section: "Dev Json Database",
    routes: [
      { title: "Dev.db", path: "/doc/Dev.db" }
    ],
  }, 

];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
