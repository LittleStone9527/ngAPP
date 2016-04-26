/**
 * Created by Suboat on 2016/4/26.
 */
angular.module('ngAppApp')
  .service("greeting", function(){
    this.sayHello = function(name){
      return 'Hello, ' + name;
    }
  });
  /*.provider("greeting", function(){
    this.$get = function(){
      var Greeting = function(){
        this.sayHello = function(name){
          return 'Hello, ' + name;
        };
        return new Greeting;
      }
    }
  });*/
  /*.factory("greeting", function(){
    return 'Hello, world';
  });*/
  /*.provider("greeting", function(){
    this.$get = function(){
      var greeting = function(){
        return 'Hello word';
      };
      return greeting();
    }
  });*/

















