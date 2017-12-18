<template>
    <f7-login-screen id="replay-popup" :opened="replayOpened">
        <f7-view>
            <f7-pages>
                <f7-page>
                    <div class="pop-huida-top">
                        <div class="question-detail">
                            <div class="head">
                                <div class="img-head"><a href="#"><img :src="question.askerAvatar"></a></div>
                                <div class="name"><a href="#">{{question.asker}}<span> 的提问</span></a></div>
                                <div class="hd-if color-999">待回答</div>
                                <div class="price">¥100</div>
                            </div>
                            <div class="body clearfix">
                                <div class="ts-shell">
                                    <span class="ts-btn">公开</span>
                                </div>
                                <div class="question-tit color-333">
                                    <a href="#" class="create-popup">{{question.title}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="tishi-hd text-center">
                            <p>最长录音时间为60秒</p>
                            <p>如果涉及敏感问题可以关闭该问题</p>
                            <a class="close-question btns btns-red-o">关闭问题</a>
                        </div>
                        <div class="btn-hd-box clearfix">
                            <div class="col-50 clearfix">
                                <figure class="pull-right"><a class="btn-yuyin" @click="showYuyin">
                                    <img src="../img/icon-ly.png">
                                </a>
                                    <figcaption class="text-center"><p>语音回答</p></figcaption>
                                </figure>
                            </div>
                            <div class="col-50">
                                <figure class="pull-left"><a class="btn-text">
                                    <img src="../img/icon-hd-txt2.png">
                                </a>
                                    <figcaption class="text-center"><p>文字回答</p></figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="close-hd-box text-center">
                        <a class="close-popup icon-shell" close-login-screen><i class="icon-close-x"></i></a>
                    </div>
                    <div class="m4u m4u-all m4u-ly" ref="luyinModal">
                        <div class="m4u-bg m4u-fade"></div>
                        <div class="m4u-dialog m4u-fade">
                            <div class="m4u-head clearfix">
                                <div class="m4u-title">
                                </div>
                            </div>
                            <div class="m4u-body">
                                <div class="m4u-txt-box text-center">
                                    <transition name="txt1-animate">
                                        <div v-if="txt1show" class="ly-txt1">
                                            <p>{{lyTxt1.t1}}</p>
                                            <p>{{lyTxt1.t2}}</p>
                                        </div>
                                    </transition>
                                    <transition name="time-animate">
                                        <div v-if="timeshow" class="timeBox"><span
                                                class="minute">{{time.minute}}</span>:<span
                                                class="second">{{time.second}}</span>
                                        </div>
                                    </transition>
                                    <transition name="txt2-animate">
                                        <div v-if="txt2show" class="ly-txt2">
                                            <p>{{lyTxt2}}</p>
                                        </div>
                                    </transition>
                                    <transition name="txt3-animate">
                                        <div v-if="txt3show" class="ly-txt3">
                                            <p>{{lyTxt3}}</p>
                                        </div>
                                    </transition>
                                    <transition name="txt4-animate">
                                        <div v-if="txt4show" class="ly-txt4">
                                            <p>{{lyTxt4}}</p>
                                        </div>
                                    </transition>
                                </div>
                                <div class="btn-luyin-box text-center clearfix">
                                    <div class="col-33">
                                        <transition name="sub-btn">
                                            <a v-if="subBtnshow" class="btn-relu btn-ci-action"
                                               @click="reRecordAction">重录</a>
                                        </transition>
                                    </div>
                                    <div class="col-33">
                                        <div class="paddingTop"></div>
                                        <transition name="ly-btn">
                                            <a v-if="lyBtnshow" class="btn-luyin" @click="lyBtnAction"><i
                                                    class="icon-ly"></i></a></transition>
                                        <transition name="lying-btn">
                                            <a v-if="lyingBtnshow" class="btn-lying" @click="lyingBtnAction"><i
                                                    class="icon-lying"></i></a>
                                        </transition>
                                        <transition name="play-btn">
                                            <a v-if="playBtnshow" class="btn-play" @click="playBtnAction"><i
                                                    class="icon-play"></i></a>
                                        </transition>
                                    </div>
                                    <div class="col-33">
                                        <transition name="sub-btn"><a v-if="subBtnshow"
                                                                      class="btn-fasong btn-ci-action">确认发送</a>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                            <div class="m4u-footer">
                                <div class="close-hd-box text-center">
                                    <a class="m4u-close icon-shell" @click="closeYuyin"><i class="icon-close-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-login-screen>
</template>
<script type="text/ecmascript-6">
    import $ from 'jquery'
    import platform from 'platform'
    import Audior from '../../static/wxAudio1.2.2.js'
    import M4u from '../../static/js/m4u.js'
    const url = 'http://5tree.com/data/jsonp/jsonp.php';
    export default {
        data () {
            return {
                question: '',
                audior: '',
                lyTxt1: {
                    t1: '录音最长时间为60秒',
                    t2: '请点击下方录音键开始录音'
                },
                lyTxt2: '录音中...轻按下方按钮结束录音',
                lyTxt3: '发送前，轻按下方按钮试听录音',
                lyTxt4: '试听中...轻按下方按钮停止播放',
                m4u: '',
                isRecording: false,
                txt1show: true,
                timeshow: false,
                txt2show: false,
                txt3show: false,
                txt4show: false,
                lyBtnshow: true,
                lyingBtnshow: false,
                playBtnshow: false,
                subBtnshow: false,
                timers: {
                    t1: null
                },
                time: {
                    second: '00',
                    minute: '00',
                    max: 60,
                    recordTime: 0,
                    runTime: null,
                    luyin: true
                },
                myMedia: '',
                playMedia: '',
                media: {
                    src: "mymedia.WAV"
                }
            }
        },
        props: ["replayOpened"],
        mounted(){
            console.log("done?" + this.done);
            let _this = this;
            _this.audior = new Audior(_this.$refs.goaudio, {});
            _this.audior.init();
            console.log()
        },
        created(){
            let _this = this;

            _this.$http.jsonp(url, {params: {id: _this.questionId}}, {
                header: {'Content-Type': 'application/x-www-urlencode'},
                emulateJSON: true
            }).then((resp) => {
                console.log('http.jsonp' + resp);
                console.log(resp);

                _this.question = resp.body.question;
            }, ()=> {
                console.log('error');
            });

            document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                console.log("media is ready now" + device.platform);
            }

        },
        methods: {
            showYuyin(){
                let _this = this;
                _this.resetTxt();
                let m4u = new M4u(this.$refs.luyinModal)
                m4u.show();
            },
            closeYuyin(){
                let _this = this;
                let m4u = new M4u(this.$refs.luyinModal)
                m4u.hide();
                setTimeout(_this.resetTxt, 500);

            },
            timego(sec){
                let _this = this;
                let date = new Date();
                let initTime = date.getTime() / 1000;
                _this.timeFormate(0);
                _this.timers.t1 = setInterval(function () {
                    let date2 = new Date();
                    _this.time.runTime = Math.floor(date2.getTime() / 1000 - initTime);
                    console.log(_this.time.runTime);
                    if (_this.time.runTime >= sec) {
                        _this.time.runTime = sec;
                        _this.playBtnshow = true;
                        _this.lyingBtnshow = false;
                        _this.subBtnshow = true;
                        _this.time.recordTime = _this.time.runTime;
                        _this.timeFormate(_this.time.runTime);
                        clearInterval(_this.timers.t1);

                        if (_this.time.luyin) {
                            _this.myMedia.stopRecord();
                            _this.time.luyin = false;
                            _this.txt2show = false;
                        } else {
                            _this.txt4show = false
                            _this.playMedia.stopPlayRecorder();
                        }
                        _this.txt3show = true;
                        console.log('clear');
                    } else {
                        _this.timeFormate(_this.time.runTime);
                    }
                }, 100)
            },
            timeFormate(sec){
                let _this = this;

                _this.time.minute = _this.numFormate(Math.floor(sec / 60));
                _this.time.second = _this.numFormate(Math.floor(sec) - (_this.time.minute * 60));

            },
            numFormate(i){
                if (i <= 9) {
                    i = "0" + i;
                }
                return i;
            },
            lyBtnAction(){

                let _this = this;
                if (_this.isRecording) {
                    return
                }
                _this.isRecording = true
                _this.txt1show = false;
                _this.txt2show = true;
                _this.timeshow = true;
                _this.lyBtnshow = false;
                _this.lyingBtnshow = true;

                _this.startRecord();
            },
            lyingBtnAction(){
                let _this = this;
                _this.lyingBtnshow = false;
                _this.playBtnshow = true;
                _this.subBtnshow = true;

                clearInterval(_this.timers.t1)
                if (_this.time.luyin) {
                    _this.txt2show = false;
                    _this.txt3show = true;
                    _this.time.luyin = false;
                    _this.time.recordTime = _this.time.runTime;
                    console.log(_this.time.recordTime);
                    _this.stopRecord();
                } else {
                    _this.txt3show = true;
                    _this.txt4show = false;
                    _this.txt2show = false;
                    _this.stopPlayRecorder();
                }

            },
            playBtnAction(){
                let _this = this;
                _this.playBtnshow = false;
                _this.lyingBtnshow = true;
                _this.subBtnshow = false;
                _this.txt3show = false;
                _this.txt4show = true;
                _this.timego(_this.time.recordTime);
                _this.playRecorder(_this.media.src);

            },
            reRecordAction(){//重录按钮
                let _this = this;
                _this.resetTxt();
                _this.myMedia = '';
                _this.playMedia = '';
            },
            startRecord(){//录音

                let _this = this;

                if (typeof Media === "function") {

                    _this.myMedia = new Media(_this.media.src, function () {
                        window.alert("media work")
                    }, function () {
                        window.alert("media error")
                    });
                    _this.myMedia.startRecord();
                    _this.timego(_this.time.max);

                } else {//浏览器模拟
                    _this.timego(_this.time.max);
                }

            },
            stopRecord(){
                let _this = this;
                _this.myMedia.stopRecord();
                _this.myMedia.release();
            },
            playRecorder(url){//播放录音
                let _this = this;
                if (typeof Media === "function") {
                    _this.playMedia = new Media(url,
                            // success callback
                            function () {
                                window.alert("playAudio():Audio Success");
                            },
                            // error callback
                            function (err) {
                                window.alert("playAudio():Audio Error: " + err);
                            });

                    // Play audio
                    _this.playMedia.play();
                }
            },
            stopPlayRecorder(){
                let _this = this;
                _this.playMedia.stop();
                _this.playMedia.release();
            },
            resetTxt(){
                let _this = this;
                clearInterval(_this.timers.t1);
                _this.txt1show = true;
                _this.txt2show = false;
                _this.txt3show = false;
                _this.txt4show = false;
                _this.timeshow = false;
                _this.lyBtnshow = true;
                _this.lyingBtnshow = false;
                _this.playBtnshow = false;
                _this.subBtnshow = false;
                _this.isRecording = false;
                _this.timers = {
                    t1: null
                };
                _this.time = {
                    second: '00',
                    minute: '00',
                    max: 60,
                    recordTime: 0,
                    runTime: null,
                    luyin: true
                }

                if (_this.myMedia != "") {
                    _this.stopRecord();
                }
                if (_this.playMedia != "") {
                    _this.stopPlayRecorder()
                }
            },
            backgo(){
                window.history.go(-1);
                console.log('back');
                //this.$router.back();
                //this.$router.reloadPage('/')
            }
        },
        beforeDestroy(){
            let _this = this;
            _this.audior.clearTime();

        }
    }
</script>

<style lang="scss">

</style>
