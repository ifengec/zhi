<template>
    <div id="detail">
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->

                <!-- Pages -->
                <f7-pages>
                    <f7-page navbar-through toolbar-through>
                        <f7-navbar title="Question" back-link="Back" class="bluedark" sliding></f7-navbar>
                        <f7-block-title>超过72小时未回答，按照原路径全额退款。</f7-block-title>
                        <!-- Page Content -->

                        <f7-block inner>
                            <div class="question-detail">
                                <div class="head">
                                    <div class="img-head"><a :href="'/user/'+question.askerUserId+'/'"><img
                                            :src="question.askerAvatar"></a>
                                    </div>
                                    <div class="name"><a href="#">{{question.asker}}<span> 的提问</span></a></div>
                                    <div class="hd-if">{{done==='1'?'已回答':'待回答'}}</div>
                                    <div class="price">¥100</div>
                                </div>
                                <div class="body clearfix">
                                    <div class="dinline-l ts-shell">
                                        <span class="ts-btn">公开</span>
                                    </div>
                                    <div class="question-tit color-333 dinline-l">
                                        {{question.title}}
                                    </div>

                                </div>
                                <div v-if="done==='1'">
                                    <div class="answer-media">
                                        <div class="media-head">
                                            <a :href="'/user/'+question.answererUserId+'/'"><img
                                                    :src="question.answererAvatar"></a>
                                        </div>
                                        <div class="media-body">
                                            <div class="btn-ting btn-audio"
                                                 data-to="static/19.m4r" data-dur="19" ref="goaudio">
                                                <div ref="yinbo" class="yinbo">
                                                    <img src="../img/sound-S.png">
                                                    <img src="../img/sound-M.png">
                                                    <img src="../img/sound-L.png">
                                                    <!--<img src="assets/img/sound-G.png">-->
                                                </div>
                                                <div class="preloader" ref="loading">
                                                </div>
                                                <div class="btn-ting-txt"><span class="djs"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="foot clearfix">
                                        <div class="dinline-l">1天前</div>
                                        <div class="dinline-r">1 人听过 <i class="icon-zan"></i>1人</div>
                                    </div>

                                    <div class="zan-box text-center ">
                                        <div class="color-999 zan-msg-tit">您觉得这个回答:</div>
                                        <div class="zan-choose-box"><a class="btn-zan btn-up"><i
                                                class="iconf icon-up-btn"></i><span>同意</span></a>
                                            <a class="btn-zan btn-down active"><i class="iconf icon-down-btn"></i><span>不同意</span></a>
                                        </div>
                                        <div class="zaned-txt text-center">
                                            值
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="foot clearfix">

                                        <div class="text-center question-buttons-box">
                                            <a class="reply-question btns btns-pill btns-red open-popup"
                                               open-popup="#my-popup">回答</a>
                                            <a class="close-question btns btns-pill" @click="closeQuestion">关闭</a>

                                        </div>
                                        <div>
                                            <div class="dinline-l">1天前</div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </f7-block>
                    </f7-page>
                </f7-pages>

            </f7-view>
        </f7-views>
        <div v-if="done==='0'">
            <f7-popup id="my-popup">
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
                    <a class="close-popup icon-shell"><i class="icon-close-x"></i></a>
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
                                    <transition name="sub-btn"><a v-if="subBtnshow" class="btn-fasong btn-ci-action">确认发送</a>
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
            </f7-popup>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import $ from 'jquery'

    import Audior from '../../static/wxAudio1.2.2.js'
    import M4u from '../../static/js/m4u.js'
    const url = '../../static/question.json';

    export default {

        data(){
            return {
                question: '',
                audior: '',
                lyTxt1: {
                    t1: '录音最长时间为60秒',
                    t2: '请点击下方录音键开始录音'
                },
                lyTxt2:'录音中...轻按下方按钮结束录音',
                lyTxt3:'发送前，轻按下方按钮试听录音',
                lyTxt4:'试听中...轻按下方按钮停止播放',
                m4u: '',
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
                myMedia:null
            }
        },
        props: ["questionId", "done"],
        mounted(){
            console.log("done?" + this.done);
            let _this = this;
            _this.audior = new Audior(_this.$refs.goaudio, {});
            _this.audior.init();

            document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                window.alert("media is ready now");
            }
        },
        created(){
            let _this = this;

            _this.$http.get(url, {id: _this.questionId}).then((resp) => {
                console.log('http.get');
                _this.question = resp.body.question;
            }, ()=> {
                console.log('error');
            });

        },
        methods: {
            closeQuestion(){
                let f7 = new Framework7({
                    modalButtonOk: '确认',
                    modalButtonCancel: '取消'
                });
                ;
                let $$ = Dom7;
                $$(document).on('click', '.close-question', function () {
                    f7.prompt('请填写您的关闭理由', '关闭问题', function (value) {
                        let reg = /^[\u4E00-\u9FA5A-Za-z0-9_\u4e00-\u9fa5]+$/;
                        if (reg.test(value)) {
                            f7.confirm('请确认您的关闭理由 :<br/>' + value, '关闭问题', function () {
                                f7.alert('问题已关闭!', '关闭问题');
                            });
                        }

                    });
                });

            },
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
                setTimeout(_this.resetTxt, 500)

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
                            _this.time.luyin = false;
                            _this.txt2show = false;
                        } else {
                            _this.txt4show = false
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
                _this.txt1show = false;
                _this.txt2show = true;
                _this.timeshow = true;
                _this.lyBtnshow = false;
                _this.lyingBtnshow = true;


                _this.goRecord();
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
                } else {
                    _this.txt3show = true;
                    _this.txt4show = false;
                    _this.txt2show = false;
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
                _this.playRecorder();

            },
            reRecordAction(){//重录按钮
                let _this=this;
                _this.resetTxt();
            },
            goRecord(){//录音
                let _this=this;
                let src="mymedia.mp3"
                _this.myMedia=new Media();
                _this.myMedia.startRecord();
                _this.timego(_this.time.max);
            },
            playRecorder(){//播放录音

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
            }
        },
        beforeDestroy(){
            let _this = this;
            _this.audior.clearTime();

        }
    };
</script>

<style lang="scss">
    @import "../css/animate.css";

</style>
