function SkillGuruLogIn(){
    document.querySelector(".more-about-skillguru-body-part").remove();
    document.getElementById('signIn').style.display = 'block';
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
//   const logInWithGitHub = document.getElementById('github-login');
//   const clientId = 'Ov23ctwTy5ywlqNFN1Pf'; // Replace with your GitHub Client ID
//   const redirectUri = 'http://localhost:5500'; // Replace with your redirect URI

//   document.getElementById('github-login').addEventListener('click', () => {
//     const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user`;
//     window.location.href = authUrl;
//   });
//   window.onload = () => {
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get('code');

//     if (code) {
//       // Display the authorization code (in a real app, send this code to your backend for exchange)
//       document.getElementById('user-info').innerHTML = `<p>Authorization Code: ${code}</p>`;
//     }
//   };
// //   window.gapi.client
// //   .init({
// //     clientId:'365657134467-mcmtvo98jqrtdbbnpbsglgo5tghsr183.apps.googleusercontent.com',
// //     plugin_name:'skillguru'
// //   })
