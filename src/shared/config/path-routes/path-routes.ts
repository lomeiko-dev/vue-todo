export enum enumRoute {
  TODO = "todo",
  SECTION = "section",
  HOME = "home",
  ABOUT = "about",
}

interface IPatchRoute {
  patch: string;
  name: string;
}

export const pathRoutes: Record<enumRoute, IPatchRoute> = {
  [enumRoute.HOME]: {
    name: "Home",
    patch: "/",
  },
  [enumRoute.TODO]: {
    name: "Todos",
    patch: "/todos",
  },
  [enumRoute.SECTION]: {
    name: "Section",
    patch: "/section",
  },
  [enumRoute.ABOUT]: {
    name: "About",
    patch: "/about",
  },
};
