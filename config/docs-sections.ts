import { Route, Section } from "@/types";

export const docsSections: Section[] = [
  {
    section: "Discord-virus24",
    routes: [
      { title: "main", path: "/canvas/main" },
      { title: "ProfileCard", path: "/canvas/Profile" },
      { title: "WelcomeCard", path: "/canvas/Welcome" },
      { title: "GoodbyCard", path: "/canvas/Goodbye" },
      { title: "FireSmokeCard", path: "/canvas/FireSmoke" },
      { title: "FireCard", path: "/canvas/Fire" },
      { title: "HeartsCard", path: "/canvas/Hearts" },
      { title: "PetPetCard", path: "/canvas/PetPet" },


    ],
  },
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
