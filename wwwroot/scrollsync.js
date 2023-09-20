import $ from 'jquery';
import smartscroll from '../node_modules/jquery-smartresizeandscroll/src/smartscroll';
//jquery-smartscroll
$.fn.smartscroll = smartscroll;

export default function(options){
  var defaluts = {
    x_sync: true,
    y_sync: true,
    use_smartscroll: false,
    smartscroll_delay: 10,
  };

  // 使用jQuery.extend 覆盖插件默认参数
  var options = $.extend({}, defaluts, options);
  console.log(options);

  var scroll_type = options.use_smartscroll ? 'smartscroll' : 'scroll';
  var $containers = this;
  
  // 滚动后设置scrolling的值，调用set同步滚动条
  var scrolling = {};
  Object.defineProperty(scrolling, 'top', {
    set: function(val){
      $containers.each(function(){
        $(this).scrollTop(val);
      });
    }
  });
  Object.defineProperty(scrolling, 'left', {
    set: function(val){
      $containers.each(function(){
        $(this).scrollLeft(val);
      });
    }
  });

  $containers.on({  
    mouseover : function(){ 
      if (scroll_type == 'smartscroll') {
        $(this).smartscroll(function(){
          options.x_sync && (scrolling.top = $(this).scrollTop());
          options.y_sync && (scrolling.left = $(this).scrollLeft());
        }, options.smartscroll_delay);
        return;
      }
      $(this).bind('scroll', function(){
        options.x_sync && (scrolling.top = $(this).scrollTop());
        options.y_sync && (scrolling.left = $(this).scrollLeft());
      })
    },  
    mouseout : function(){  
      $(this).unbind('scroll');
    }
  }); 


  return this; 
}