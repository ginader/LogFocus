javascript:
(function(){
  logfocus={
    init:function(){
      var that=this;
      if(document.body){
        document.body.onfocusin=function(e){
          that.windowFocus(e);
        }
      }
      if(window.addEventListener){
        window.addEventListener('focus',function(e){that.windowFocus(e);},true);
      }
    }
    ,windowFocus:function(e){
      var evt=e||window.event;
      var tgt=evt.target||evt.srcElement;
      this.log(tgt);
    }
    ,log:function(o){
      if(window.console&&window.console.log){
        window.console.log('focus:');
        if(console.provider&&console.provider=='Companion.JS'){
          if(o.nodeName){
            window.console.log(this.buildMarkup(o));
          }
          else{
            window.console.log(o);
          }
        }
        else{
          window.console.log(o);
        }
      }
      else if(window.opera&&opera.postError){
        opera.postError('focus:');
        if(o.nodeName){
          opera.postError(this.buildMarkup(o));
        }
        else{
          opera.postError(o);
        }
      }
    }
    ,buildMarkup:function(o){
      var output='<';
      output+=o.nodeName.toLowerCase();
      output+=this.getPropMarkup(o,'id');
      output+=this.getPropMarkup(o,'class');
      output+=this.getPropMarkup(o,'href');
      output+=this.getPropMarkup(o,'type');
      output+=this.getPropMarkup(o,'value');
      output+='>';
      return output;
    }
    ,getPropMarkup:function(o,prop){
      if(o[prop]){
        return ' '+prop+'='+o[prop];
      }
      else{
        return '';
      }
    }
  }
  ;
  logfocus.init();
}
)();
