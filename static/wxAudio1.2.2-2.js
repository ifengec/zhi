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

        //属性
        this.timer = null;
        this.settings = $.extend({}, this.default, typeof options == 'object' && options);
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
                var $audio = $('audio');
                if (self.timer) {
                    clearInterval(self.timer);
                }
                self.updateTime(self.dur);
                self.yinbo.hide();
                self.loading.show();

                if ($audio.length === 0) {
                    $('body').append('<div class="audio">' +
                        '<audio src="" preload autoplay></audio>' +
                        '</div>');
                    $audio = $('audio');
                } else {
                    $audio[0].pause();
                }

                $audio.attr('src', self.url);
                $audio[0].play();
                self.goTime();
            });
        },
        goTime: function () {
            var self = this;
            var $audio = $('audio');
            console.log($(self.className));
            $(self.className + '.active').removeClass('active');


            self.timer = setInterval(function () {
                self.$btn.data('timer', self.timer);
                console.log(self.timer);


                var tim = Math.ceil($audio[0].currentTime);
                var tim2 = self.dur - tim;
                console.log(tim2);
                if (tim2 <= 0) {
                    clearInterval(self.timer);
                    self.updateTime(self.dur);
                    self.$btn.removeClass('active');
                    console.log('clear timer2 over');
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
        //,

        //进度条
        //animateProgressBarPosition: function () {
        //    var self = this,
        //        percentage = (self.Audio.currentTime * 100 / self.Audio.duration) + '%';
        //    if (percentage == "NaN%") {
        //        percentage = 0 + '%';
        //    }
        //    var styles = {
        //        "width": percentage
        //    };
        //    self.$audio_progress.css(styles);
        //}
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
        cleartimer:function(){
            clearInterval(this.timer)
        }
    };
    $.fn.wxAudio = function (options) {

        return this.each(function () {
            var audior = new Audior(this, options);
            if(typeof options==='string'){
                audior[options]();
            }
        });
    };
