<template>
    <f7-page>
        <!--<f7-link @click="$route.view.router.load({url: '/'})">back</f7-link>-->
        <f7-navbar title="问题" back-link="Back" sliding></f7-navbar>
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
                            <a class="reply-question btns btns-pill btns-red"
                               @click="openReplay">回答</a>
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
</template>
<script type="text/ecmascript-6">
    import $ from 'jquery'
    import Audior from '../../static/wxAudio1.2.2.js'
    import platform from 'platform'
    const url = 'http://5tree.com/data/jsonp/jsonp.php';
    import bus from '../../src/bus.js'
    export default {

        data(){
            return {
                question: '',
                audior: ''
            }
        },
        props: ["questionId", "done"],
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
                _this.$root.question = resp.body.question;
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
            openReplay () {
                var self = this;

                bus.$emit('on-bus',self.question);
                console.log('click');
            }
        },
        beforeDestroy(){
            let _this = this;
            _this.audior.clearTime();
        }
    };
</script>

<style lang="scss">
</style>
