app.controller("OneControllerToRuleThemAll", function ($scope, $firebaseArray){
  var ref = new Firebase ("https://scorching-torch-1609.firebaseio.com/reddit")
  $scope.Posts = $firebaseArray(ref)

  $scope.upToot = function (post){
    post.upTootCount++
    $scope.Posts.$save(post)
    console.log('this is the post', post)
  }
  $scope.downToot = function(post) {
    post.upTootCount--
    $scope.Posts.$save(post)
  }

  $scope.submitPost = function(){
    $scope.Posts.$add({title: $scope.PostTitle, imgURL : $scope.PostImageURL, postText: $scope.PostText, PostAuthor: $scope.PostAuthor, upTootCount: 0 })
    // console.log('this is the post title via $scope.PostTitle:', $scope.PostTitle)
    $scope.PostTitle=''
    $scope.PostAuthor = ''
    $scope.PostText = ''
    $scope.PostImageURL=''
    $scope.showme = false
  }
  $scope.Comments = []
  $scope.getComments = function(){
    $scope.Comments.push
  }
})


app.controller('timeAppController', function($scope) {
    var vm = this;
    vm.timeOne = new Date()
  })
