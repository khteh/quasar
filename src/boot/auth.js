import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default async ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)

    let isAuthenticated = async () => await Firebase.auth().currentUser !== null

    if (authRequired) {
      if (isAuthenticated) {
        // User is already signed in. Continue on.
        next()
      } else {
        // Not signed in. Redirect to login page.
        next({
          name: 'logIn'
        })
      }
    } else {
      // Doesn't require authentication. Just continue on.
      next()
    }
  })
}