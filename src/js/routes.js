import HomePage from "../pages/home.jsx";
import AboutPage from "../pages/about.jsx";
import FormPage from "../pages/form.jsx";
import CatalogPage from "../pages/catalog.jsx";
import ProductPage from "../pages/product.jsx";
import SettingsPage from "../pages/settings.jsx";

import DynamicRoutePage from "../pages/dynamic-route.jsx";
import RequestAndLoad from "../pages/request-and-load.jsx";
import NotFoundPage from "../pages/404.jsx";
import Chats from "../pages/Chats.jsx";
import Test from "../pages/test.jsx";

var routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/about/",
    component: AboutPage,
  },

  {
    path: "/chats/",
    component: Chats,
  },
  {
    path: "/chats/:id/",
    asyncComponent: () => import("../pages/Messages"),
  },
  {
    path: "/form/",
    component: FormPage,
  },
  {
    path: "/contacts/",
    popup: {
      asyncComponent: () => import("../pages/Contacts"),
    },
  },
  {
    path: "/catalog/",
    component: CatalogPage,
  },
  {
    path: "/product/:id/",
    component: ProductPage,
  },
  {
    path: "/settings/",
    component: SettingsPage,
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/test/blog/:blogId/post/:postId/",
    component: Test,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
