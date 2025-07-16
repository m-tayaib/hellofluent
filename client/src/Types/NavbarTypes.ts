export type NavbarLink = {
    id: number,
    title: string,
    route: string,
}
export const Links: NavbarLink[] = [{
    id: 0,
    title: "Home",
    route: "/"
}, {
    id: 1,
    title: "Learn Languages",
    route: "/languages",
}, {
    id: 2,
    title: "about",
    route: "/about"
},
]