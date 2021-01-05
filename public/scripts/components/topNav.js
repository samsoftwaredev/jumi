const getTopNav = () => {
  // nav
  const navElement = document.createElement("NAV");
  navElement.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-light",
    "bg-light"
  );
  // nav container
  const containerNavElement = document.createElement("DIV");
  containerNavElement.classList.add("container-fluid");
  // brand link
  const navBrandElement = document.createElement("A");
  navBrandElement.classList.add("navbar-brand");
  navBrandElement.setAttribute("href", "/");
  navBrandElement.innerHTML = "JUMI";
  // links container
  const containerNavLinksElement = document.createElement("DIV");
  containerNavLinksElement.classList.add("collapse", "navbar-collapse");
  // link list container
  const navLinksElement = document.createElement("UL");
  navLinksElement.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");
  // links
  const links = [];
  links.push({ label: "Grupos", href: "/grups" });
  links.push({ label: "El Rosario", href: "/rosary" });
  links.push({ label: "Articulos", href: "/articulos" });

  const linkElements = links.map(({ label, href }) => {
    const ilElement = document.createElement("LI");
    ilElement.classList.add("nav-item");
    const aElement = document.createElement("A");
    aElement.innerHTML = label;
    aElement.classList.add("nav-link");
    aElement.setAttribute("href", href);
    ilElement.append(aElement);
    return ilElement;
  });
  // (toggler) responsive button nav
  const togglerButtonElement = document.createElement("BUTTON");
  togglerButtonElement.classList.add("navbar-toggler");
  togglerButtonElement.setAttribute("type", "button");
  togglerButtonElement.setAttribute("aria-expanded", "false");
  togglerButtonElement.setAttribute("aria-label", "Toggle Navigation");
  togglerButtonElement.setAttribute("data-bs-toggle", "collapse");

  containerNavElement.append(navBrandElement);
  containerNavElement.append(togglerButtonElement);
  containerNavElement.append(containerNavLinksElement);
  containerNavLinksElement.append(navLinksElement);
  linkElements.map((elem) => navLinksElement.append(elem));
  navElement.append(containerNavElement);
  return navElement;
};
