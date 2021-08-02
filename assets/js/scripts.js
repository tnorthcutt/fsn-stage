$(document).ready(function() {

  // Main nav dropdown
  $(".nav-drop").hover(function() {
      $(this).find(".sub-nav-wrap").toggle();
  });

  // Card carousels
  // Additional increments below when multiple carousels are on the same page
  $(".card-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots"),
    prevArrow: $(".card-prev"),
    nextArrow: $(".card-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".card-carousel-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-2"),
    prevArrow: $(".card-prev-2"),
    nextArrow: $(".card-next-2"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".card-carousel-3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".card-dots-3"),
    prevArrow: $(".card-prev-3"),
    nextArrow: $(".card-next-3"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Book toc carousel
  $(".toc-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".toc-dots"),
    prevArrow: $(".toc-prev"),
    nextArrow: $(".toc-next"),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Blog post slider
  $(".blog-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".blog-dots"),
    prevArrow: $(".blog-prev"),
    nextArrow: $(".blog-next")
  });

  // Success slider
  // Additional increments below when multiple carousels are on the same page
  $(".suc-quotes").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".suc-dots"),
    prevArrow: $(".suc-prev"),
    nextArrow: $(".suc-next")
  });

  $(".suc-quotes-2").slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    appendDots: $(".suc-dots-2"),
    prevArrow: $(".suc-prev-2"),
    nextArrow: $(".suc-next-2")
  });

  // Accordion
  $(".acc-hide").hide();
  $(".accordion h6").click(function(){
    $(this).next(".acc-hide").slideToggle();
    $(this).toggleClass("active");
  });

  // Instant access tag
  $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
       $(".access-tag").addClass("fixed");
    } else {
       $(".access-tag").removeClass("fixed");
    }
  });

  // Instant access tag show/hide
  var footer = $(".access-tag");
  $(window).scroll(function() {
    if (($(window).scrollTop() + $(window).height() > $(document).height() - 200)
        && footer.is(":visible")) {
      footer.stop().fadeOut(300);
    } else if (($(window).scrollTop() < $(document).height() - 100)
       && footer.is(":hidden")) {
      footer.stop().fadeIn(300);
    }
  });

  // Get access modal
  $(".btn-access-tag").click(function() {
    $(".access-modal, .access-overlay").fadeIn();
    $(".access-overlay").click(function(){
      $(".access-modal").fadeOut();
      $(this).fadeOut();
    });
  });

  $(".access-close, .access-overlay").click(function(){
    $(".access-overlay, .access-modal").fadeOut();
  });

  // Book sidebar table of contents toggle
  $(".toc-title").click(function() {
    $(this).next().siblings().removeClass("active");
    $(this).addClass("active");
    $(this).next(".toc-chapter").slideToggle().siblings(".toc-chapter").slideUp();
  });

  // Blog category filtering
  // show all blog posts
  $(".articles #show-all").click(function() {
    $(".blog-list > div").attr("style", "display:inline-block");
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".cat-active").removeClass("cat-active");
    if (this.id == "all") {
      $(".blog-list > div").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".blog-list > div").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  // Resource category filtering
  // show all resource articles
  $(".resources #show-all").click(function() {
    $(".blog-list > div").attr("style", "display:inline-block");
    $(".blog-featured").show();
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".blog-featured").hide();
    $(".cat-active").removeClass();
    if (this.id == "all") {
      $(".blog-list > div").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".blog-list > div").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  // Success stories category filtering
  // show all success stories
  $(".success-stories #show-all").click(function() {
    $(".success-indi").attr("style", "display:flex");
    $("li button").removeClass("btn-active");
    $(this).parent().addClass("cat-active");
  });

  var $btns = $(".resource-filter").click(function() {
    $(".cat-active").removeClass();
    if (this.id == "all") {
      $(".success-indi").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      $(".success-indi").not($el).hide();
    }
    $btns.removeClass("btn-active");
    $(this).addClass("btn-active");
  });

});



// Salary counter offer calculator
// This knows about salary calculation things, but doesn't know about
// the DOM or jQuery.
function SalaryLogic() {}

SalaryLogic.prototype ={
  // calculates the counteroffer.
  counter: function counter(offer, they_need_you, you_need_them, minimum) {
    console.log(arguments);
    // need is 0 -> .1 for how much more you should increase your counteroffer.
    var need = Math.max(0, they_need_you - you_need_them) * .01;
    raw_counter = Math.max(
      minimum, // never go lower than the minimum
      offer * (1.1 + need) // always counter at least 10% more, even if need is 0.
    );
    return round_nearest_1000(raw_counter);
  },

  // generates the data structure for the script w/ increments from your
  // initial offer to your counter.
  script_increments: function script_increments(offer, counteroffer, minimum_acceptable) {
    /*
     Increment calculation/rules
     - Up to 9 increments between offer and counter
     - Baseline for increments is $1k each
     - Only as many increments as needed to bridge gap between offer and counter
     - If more than 9 increments needed at $1k each, go to $2k per increment, if $2k won't work, go to $3k, then $4k, then $5k.
     - Once you hit $5k per increment, show up to 9 increments with a "..." for everything below the lowests of the 9 and above the offer.
     - Start counting UP from the offer when setting increments. (eg, if offer is $100k and counter is $115k, we would use $2k increments and the FIRST one would be $102k)
     */
    var increment = 1000;
    var disparity = parseInt(counteroffer - offer);
    if (disparity > 10000) { // more than 9 1k increments
      increment = round_nearest_10((disparity / 1000)) * 100;
    }
    var options = [];
    for (var i = 0; i < 11; i++) {
      var next_entry = offer + (increment * i);
      if (next_entry > counteroffer) {
        break;
      }
      options.unshift(next_entry);
    }
    var more_than_9 = counteroffer - (increment * 9) > offer;
    return {
      counters: options,
      more_than_9: more_than_9
    };
  }

};

function round_nearest_10(num) {
  return Math.ceil(num/10)*10;
}

function round_nearest_500(num) {
  return Math.round(num/500)*500;
}

function round_nearest_1000(num) {
  return Math.round(num/1000)*1000;
}

// formats a number to look like nice money. Discards cents, but can
// handle string inputs. 50000 -> $50,000
function pretty_money(number) {
  //return '$'+ Number(Number(number).toFixed(0)).toLocaleString();
  return '$'+ Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Page($jquery) {
  this.$ = $jquery;
};

Page.prototype = {

  set_counteroffer:  function (text) {
    this.$('.counteroffer-number').hide();
    this.$('.counteroffer-number').text(text).fadeIn(800);
  },

  set_original_offer: function (text) {
    this.$('.original-offer').text(pretty_money(text));
  },

  set_minimum_acceptable: function (text) {
    this.$('.minimum-acceptable').text(pretty_money(text));
  },

  set_benefits: function (text) {
    if( this.$('#benefit_1').val() ) {
      this.$('.benefit_1').text(this.$('#benefit_1').val());
      this.$('.benefit_1').closest('li').show();
    } else {
      this.$('.benefit_1').closest('li').hide();
    }

    if( this.$('#benefit_2').val() ) {
      this.$('.benefit_2').text(this.$('#benefit_2').val());
      this.$('.benefit_2').closest('li').show();
    } else {
      this.$('.benefit_2').closest('li').hide();
    }

    if( this.$('#benefit_3').val() ) {
      this.$('.benefit_3').text(this.$('#benefit_3').val());
      this.$('.benefit_3').closest('li').show();
    } else {
      this.$('.benefit_3').closest('li').hide();
    }
  },

  //set_benefit_2: function (text) {
  //  this.$('.benefit_2').text(get_benefit_2());
  //},
  //
  //set_benefit_3: function (text) {
  //  this.$('.benefit_3').text(get_benefit_3());
  //},

  get_offer: function () {
    return Number(this.$('#offer_amount').val().replace(',', ''));
  },

  get_they_need: function () {
    return Number($('#they_need_you').val());
  },

  get_you_need: function () {
    return Number($('#you_need_them').val());
  },

  minimum_acceptable: function () {
    return Number($('#minimum_acceptable').val().replace(',', ''));
  },

  show_counteroffer: function () {
    this.$('#counteroffer-section').slideDown();
    this.$('#counteroffer-script').show();
  },

  write_script: function (step_info) {
    // loop through step_info.counters to build up dom.
    this.$('.js-script').empty();
    for (var step in step_info.counters) {
      // Strip off the first and last entry (counter & offer
      // respectively) as those are handled specially in the template.
      if (step == 0 || step == step_info.counters.length - 1) {
        continue;
      }
      this.$('.js-script').append("<li><strong>" + pretty_money(step_info.counters[step])  + "</strong></li>");
    }
  }
};

// Bootstrap slider
!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function c(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var f=Object.keys(this.defaultOptions),g=0;g<f.length;g++){var h=f[g],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l);var s=Array.isArray(this.options.labelledby);if(s&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),s&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!s&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(g=0;g<this.options.ticks.length;g++){var t=document.createElement("div");t.className="slider-tick",this.ticks.push(t),r.appendChild(t)}j.className+=" tick-slider-selection"}if(r.appendChild(m),r.appendChild(n),this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",g=0;g<this.options.ticks_labels.length;g++){var u=document.createElement("div"),v=0===this.options.ticks_positions.length,w=this.options.reversed&&v?this.options.ticks_labels.length-(g+1):g;u.className="slider-tick-label",u.innerHTML=this.options.ticks_labels[w],this.tickLabels.push(u),this.tickLabelContainer.appendChild(u)}var x=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},y=document.createElement("div");y.className="tooltip tooltip-main",y.setAttribute("role","presentation"),x(y);var z=document.createElement("div");z.className="tooltip tooltip-min",z.setAttribute("role","presentation"),x(z);var A=document.createElement("div");A.className="tooltip tooltip-max",A.setAttribute("role","presentation"),x(A),this.sliderElem.appendChild(r),this.sliderElem.appendChild(y),this.sliderElem.appendChild(z),this.sliderElem.appendChild(A),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),e[this.options.scale]&&(this.options.scale=e[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),g=0;g<this.ticks.length;g++)this._removeClass(this.ticks[g],"round triangle hide");var B=["round","triangle","custom"],C=-1!==B.indexOf(this.options.handle);if(C)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),g=0;g<this.ticks.length;g++)this._addClass(this.ticks[g],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var d={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},e={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(b=function(a,b){return c.call(this,a,b),this},b.prototype={_init:function(){},constructor:b,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null,labelledby:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),c.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b="vertical"===this.options.orientation?"height":"width",c="vertical"===this.options.orientation?"marginTop":"marginLeft",d=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var e=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[c]=-d/2+"px"),e=this.tickLabelContainer.offsetHeight;else for(f=0;f<this.tickLabelContainer.childNodes.length;f++)this.tickLabelContainer.childNodes[f].offsetHeight>e&&(e=this.tickLabelContainer.childNodes[f].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=e+"px")}for(var f=0;f<this.options.ticks.length;f++){var g=this.options.ticks_positions[f]||this._toPercentage(this.options.ticks[f]);this.options.reversed&&(g=100-g),this.ticks[f].style[this.stylePos]=g+"%",this._removeClass(this.ticks[f],"in-selection"),this.options.range?g>=a[0]&&g<=a[1]&&this._addClass(this.ticks[f],"in-selection"):"after"===this.options.selection&&g>=a[0]?this._addClass(this.ticks[f],"in-selection"):"before"===this.options.selection&&g<=a[0]&&this._addClass(this.ticks[f],"in-selection"),this.tickLabels[f]&&(this.tickLabels[f].style[b]=d+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[f]?(this.tickLabels[f].style.position="absolute",this.tickLabels[f].style[this.stylePos]=g+"%",this.tickLabels[f].style[c]=-d/2+"px"):"vertical"===this.options.orientation&&(this.tickLabels[f].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style.marginTop=this.sliderElem.offsetWidth/2*-1+"px"))}}var h;if(this.options.range){h=this.options.formatter(this._state.value),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var i=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,i);var j=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,j),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else h=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var k=this.tooltip_min.getBoundingClientRect(),l=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?k.right>l.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):k.right>l.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(d.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(d.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a){var f=a.fn.slider?"bootstrapSlider":"slider";a.bridget(f,b),a(function(){a("input[data-provide=slider]")[f]()})}}(a),b});


// Calculator
$(document).ready(function () {
  $('#generate_script').click(function (e) {
    e.preventDefault();
    var logic = new SalaryLogic();
    var page = new Page($, new SalaryLogic());
    var minimum_acceptable = page.minimum_acceptable();
    var original_offer = page.get_offer();

    // calculate counteroffer here.
    var counteroffer = logic.counter(
      original_offer,
      page.get_they_need(),
      page.get_you_need(),
      page.minimum_acceptable()
    );

    page.set_counteroffer(pretty_money(counteroffer));
    page.set_original_offer(original_offer);
    page.set_minimum_acceptable(minimum_acceptable);
    page.write_script(logic.script_increments(original_offer, counteroffer, minimum_acceptable));
    page.show_counteroffer();
    page.set_benefits();
  });

  $('#they_need_you').slider({
    tooltip: 'always',
    formatter: function(value) {
      if(value <= 3){
        return value + ': Not much';
      }
      else if(value <= 6){
        return value + ': Somewhat';
      }
      else {
        return value + ': A lot';
      }
    }
  });

  $('#you_need_them').slider({
    tooltip: 'always',
    formatter: function(value) {
      if(value <= 3){
        return value + ': Not much';
      }
      else if(value <= 6){
        return value + ': Somewhat';
      }
      else {
        return value + ': A lot';
      }
    }
  });
});