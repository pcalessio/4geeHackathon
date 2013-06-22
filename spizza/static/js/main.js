var app = angular.module('spizza', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.factory('Firebase', function() {
    return new Firebase('https://4gee.firebaseIO.com/conversations');
});

app.controller('MainController', function($scope, Firebase) {
    Firebase.on('value', function(snapshot) {
        $scope.conversations = snapshot.val();
        if(!$scope.$$phase) $scope.$digest();
    });
});

app.controller('SubmitController', function($scope, Firebase) {
    $scope.addConversation = function() {
        Firebase.push({
            requester: window.AUTH.first_name + ' ' + window.AUTH.last_name,
            title: $scope.formTitle
            //tags: $scope.formTags
        });
        $scope.formTitle = '';
    };
});
