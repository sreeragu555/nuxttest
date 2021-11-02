export default function ({app, route, redirect}){
  if (route.path !== '/Login') {
    //we are on a protected route
    // if(!app.$fire.auth.currentUser) {
    //   //take them to sign in page
    //   return redirect('/login')
    // }
    // if(app.$fire.auth.currentUser) {
    //   //take them to sign in page
    //   return redirect('/')
    // }

  } else if (route.path === '/Login') {
    if(!app.$fire.auth.currentUser) {
      //leave them on the sign in page
      console.log("not logged in")
    } else {
      return redirect('/')
    }
  }
}