/**
 * Created by jsbfec on 16/9/9.
 * v2.1
 * 将timer的id放在元素的data-timer里面,以便跨实例清除
 * update 20170309
 */


var Audior = function (context, options) {
    //dom
    this.$btn = $(context);
    this.url = $(context).data('to');
    this.djsBox = $(context).find('.djs');
    this.dur = this.$btn.data('dur');
    this.yinbo = this.$btn.find('.yinbo');
    this.loading = this.$btn.find('.preloader');
    this.text = "点击播放";
    this.default = {};
    this.className = ".btn-audio";
    this.target = '.answer-media';

    //属性
    this.timer = null;
    this.settings = $.extend({}, this.default, options);
    //执行初始化
    //this.init();
};

Audior.prototype = {
    init: function () {
        var self = this;
        self.events('click');

        self.updateTime(self.dur);
    },
    events: function (e) {
        var self = this;
        self.$btn.on(e, function () {
            var $audio = $('.play-audio audio');
            if (self.timer) {
                clearInterval(self.timer);
            }
            self.updateTime(self.dur);
            self.yinbo.hide();
            self.loading.show();

            if ($audio.length === 0) {
                $(self.target).append('<div class="play-audio" style="display: none;overflow: hidden">' +
                    '<audio src="" preload autoplay></audio>' +
                    '</div>');
                $audio = $('.play-audio audio');
            } else {
                $audio[0].pause();
            }

            $audio.attr('src', self.url);
            $audio.on('canplay', function () {

                console.log("dur:");
                console.log(this.duration + 's');
                $audio[0].play();
                self.goTime();
            });

        });
    },
    goTime: function () {
        var self = this;
        var $audio = $('audio');
        console.log($(self.className));
        $(self.className + '.active').removeClass('active');

        if (self.timer != null) {
            clearInterval(self.timer);
        }
        self.timer = setInterval(function () {

            console.log(self.timer + 'timer');

            var tim = Math.ceil($audio[0].currentTime);
            var tim2 = self.dur - tim;
            console.log(tim2 + 's');
            if (tim2 <= 0) {
                clearInterval(self.timer);
                self.updateTime(self.dur);
                self.$btn.removeClass('active');
                console.log('clear timer2 over');
                console.log(self.timer + 'timer');
                return false;
            } else if (tim2 === self.dur) {
                console.log('loading');
                return true;
            } else {
                self.loading.hide();
                self.yinbo.show();
                console.log('playing');
                self.updateTime(tim2);
                self.$btn.addClass('active');
            }
        }, 1000);
    }
    ,
    // time update
    updateTime: function (sec) {
        var self = this;
        var minute = self.timeFormat(Math.floor(sec / 60));
        var second = self.timeFormat(Math.floor(sec) - (minute * 60));
        self.djsBox.text(minute + ':' + second);
    },
    //time format
    timeFormat: function (i) {
        if (i <= 9) {
            i = "0" + i;
        }
        return i;
    },
    clearTime: function () {
        clearInterval(this.timer);
    }
};
//兼容模块
if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Audior;
} else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function () {
        return Audior;
    })
} else {
    window.Audior = Audior;
}

