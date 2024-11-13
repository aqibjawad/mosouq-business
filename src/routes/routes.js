// Bsuiness module Pages

import ContactUs from "../pages/contactus/index";

import BusinessSignUp from "../pages/auth/auth.business";

import BusinessSignIn from "../pages/auth/signin.business";

// import Error from "../pages/error/error.business";

import Home from "../pages/home";

import BusinessProfile from "../pages/profile/index";

import Price from "../pages/pricing/index";

import BusinessDemo from "../pages/demo/business.demo";

import NewCustomers from "../pages/solutions/newcustomers";

import ServiceReview from "../pages/features/service.features";

import BlogCards from "../pages/resources/blog.resources";

import BusinessPassword from "../pages/auth/auth.businessPassword";

import BusinessProfileSetup from "../pages/business-profile/index";

import ListingBasic from "../pages/businessListing"

 
// Business Pages

import BusinessHome from "../pages/businessProfile/home.business";
import PropertyDetails from "../pages/businessDetails";

import Dashboard from "../pages/business_profile/businessHome";

import BusinessReviews from "../pages/business_profile/businessReviews"

import ShareAndPromote from "../pages/business_profile/businessPromote";

import Settings from "../pages/businessProfile/business.settings"

import ProfileUpdate from "../pages/businessProfile/business.profileUpdate";

const routes = [
  // ------------------ Business MOdule PAges

  { path: "/listingBasic", element: <ListingBasic />, exact: "true", type: "public" },

  { path: "/", element: <Home />, exact: "true", type: "public" },

  { path: "/contactus", element: <ContactUs />, exact: "true", type: "public" },

  {
    path: "/business-signup",
    element: <BusinessSignUp />,
    exact: "true",
    type: "public",
  },

  {
    path: "/property-details",
    element: <PropertyDetails />,
    exact: "true",
    type: "public",
  },

  {
    path: "/business-signup-password",
    element: <BusinessPassword />,
    exact: "true",
    type: "public",
  },

  {
    path: "/business-signin",
    element: <BusinessSignIn />,
    exact: "true",
    type: "public",
  },

  // { path: "/error", element: <Error />, exact: "true", type: "public" },

  { path: "/pricing", element: <Price />, exact: "true", type: "public" },

  { path: "/demo", element: <BusinessDemo />, exact: "true", type: "public" },

  {
    path: "/solution/new-customers",
    element: <NewCustomers />,
    exact: "true",
    type: "public",
  },

  {
    path: "/features/service-review",
    element: <ServiceReview />,
    exact: "true",
    type: "public",
  },

  {
    path: "/resources/blogs",
    element: <BlogCards />,
    exact: "true",
    type: "public",
  },

  // All Private Routes Are hereby Reserved

  {
    path: "/profile",
    element: <BusinessProfile />,
    exact: "true",
    type: "private", 
  },

  {
    path: "/business-profile",
    element: <BusinessProfileSetup />,
    exact: "true",
    type: "private",
  },

  {
    path: "/business-Home",
    element: <BusinessHome />,
    exact: "true",
    type: "business",
  },

  {
    path: "/business-Home-dashboard",
    element: <Dashboard />,
    exact: "true",
    type: "business",
  },

  {
    path: "/business-Home-reviews",
    element: <BusinessReviews />,
    exact: "true",
    type: "business",
  },

  {
    path: "/share_promote",
    element: <ShareAndPromote />,
    exact: "true",
    type: "business",
  },

  {
    path: "/business-settings",
    element: <Settings />,
    exact: "true",
    type: "business",
  },


  {
    path: "/profile-update",
    element: <ProfileUpdate />,
    exact: "true",
    type: "business",
  },

];
export default routes;
