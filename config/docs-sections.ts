import { Route, Section } from "@/types";

export const docsSections: Section[] = [
  {
    section: "Web",
    routes: [

      { title: "App Cookie", path: "/doc/app-cookie" },
			{ title: "Virus Back", path: "/doc/virus-back" }

    ],
  }, 
	{
    section: "Json Database",
    routes: [
      { title: "Dev.db", path: "/doc/Dev.db" },
			{ title: "Bad.db", path: "/doc/bad.db" }
    ],
  }, 
  {
    section: "Virus Nsfw",
    routes: [

      { title: "Filter", path: "/doc/Filter" },
    ],
  }, 
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
    section: "Discord Bot Genrator",
    routes: [
      { title: "Bot Genrator", path: "/doc/bot-genrator" }
    ],
  }, 
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
