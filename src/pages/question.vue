<template>
    <f7-page>
        <f7-navbar title="Question" back-link="Back" sliding></f7-navbar>
        <f7-block-title>超过72小时未回答，按照原路径全额退款。</f7-block-title>
        <f7-block inner>
            <div class="question-detail">
                <div class="head">
                    <div class="img-head"><a :href="'/user/'+question.askerUserId+'/'"><img :src="question.askerAvatar"></a></div>
                    <div class="name"><a href="#">{{question.asker}} 的提问</a></div>
                    <div class="hd-if">已回答</div>
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
                <div class="answer-media">
                    <div class="media-head">
                        <a :href="'/user/'+question.answererUserId+'/'"><img :src="question.answererAvatar"></a>
                    </div>
                    <div class="media-body">
                        <div class="btn-ting btn-audio"
                             data-to="http://51zhid.com/media/123.mp3" data-dur="200">
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
                    <div class="zan-choose-box"><a class="btn-zan btn-up"><i class="iconf icon-up-btn"></i><span>同意</span></a>
                        <a class="btn-zan btn-down active"><i class="iconf icon-down-btn"></i><span>不同意</span></a></div>
                    <div class="zaned-txt text-center">
                        值
                    </div>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>
<script type="text/ecmascript-6">
    import jquery from 'jquery'
    import '../wxAudio1.2.2.js'
    const url = '/static/question.json';
    export default {
        data(){
            return{
                question:'',
                time:{
                    minute:'',
                    second:''
                },
                timer:null,
                dur:0,
                url:''
            }
        },
        props: ["questionId"],
        created(){
            let _this = this;
            _this.$http.get(url,{id:_this.questionId}).then((resp) => {
                console.log('http get');
                _this.question = resp.body.question;
            }, ()=> {
                console.log('error');
            });
            $('.btn-audio').wxAudio();
        },
        methods:{

        },
        ready() {

        }
    };
</script>

<style lang="scss">

</style>
