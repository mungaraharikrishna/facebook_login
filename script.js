var app = angular.module('app', []);
app.controller('MyAppCtrl', function ($scope) {
    // 'ads_management, ads_read, business_management, catalog_management,instagram_basic,instagram_content_publish,instagram_manage_comments,instagram_manage_insights,instagram_manage_messages,instagram_shopping_tag_products,leads_retrieval,pages_manage_cta,page_events,pages_manage_ads,pages_manage_engagement,pages_manage_instant_articles,pages_manage_metadata,pages_manage_posts,pages_messaging,pages_read_engagement,whatsapp_business_messaging'

    $scope.userDetails = '';
    var facebook_scopes = 'ads_management, ads_read, business_management, catalog_management,leads_retrieval,pages_manage_cta,page_events,pages_manage_ads,pages_manage_engagement,pages_manage_instant_articles,pages_manage_metadata,pages_manage_posts,pages_messaging,pages_read_engagement'
    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', 'GET', {fields: 'email, id, name, picture, first_name'}, function (response) {
            console.log('Successful login for: ', response);
            $scope.$apply(function() {
                $scope.userDetails = response;
            })
        });
    }


    $scope.statusChangeCallback = function (response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI();
        } else {
            console.log('Please log ' + 'into this app.');
            // The person is not logged into your app or we are unable to tell.
            //   document.getElementById('status').innerHTML = 'Please log ' +
            //     'into this app.';
        }
    }


    $scope.onFBLogin = function () {
        FB.login(function (response) {
            // user_birthday, user_friends, user_posts, manage_pages, publish_pages, pages_manage_cta, pages_manage_instant_articles
            $scope.statusChangeCallback(response);
        }, { scope: facebook_scopes });
    }
});