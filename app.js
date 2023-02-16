// function checkLoginState() {
//     FB.getLoginStatus(function (response) {
//         statusChangeCallback(response);
//     });
// }

window.fbAsyncInit = function () {
    FB.init({
        appId: '776893489324263',
        // appId: '936319810089639',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v15.0',
    });
};


// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));