<template>
    <!-- App -->
    <div id="app">
        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios">
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding>值答</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page infinite-scroll @infinite="getQuestions">
                        <!-- Material Theme Navbar -->
                        <f7-navbar v-if="$theme.material">
                            <f7-nav-left>
                                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                            </f7-nav-left>
                            <f7-nav-center sliding>Framework7</f7-nav-center>
                            <f7-nav-right>
                                <f7-link icon="icon-bars" open-panel="right"></f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <!-- Page Content -->

                        <div class="question-list" v-if="questions">
                            <div class="question-item" v-for="item in questions">
                                <questionItem :question="item" :questionId="item.id" :done="item.done" :userId="item.answererUserId"></questionItem>
                            </div>
                        </div>
                    </f7-page>
                </f7-pages>
                <f7-toolbar bottom>
                    <f7-link href="http://www.spotify.com" class="link external">
                        <i class="icon icon-spotify"></i>
                        <p class="color-white">&nbsp;Spotify</p>
                    </f7-link>
                    <f7-link href="http://www.idangero.us/framework7" class="link external">
                        <i class="icon icon-f7"></i>
                    </f7-link>
                </f7-toolbar>
            </f7-view>
        </f7-views>
    </div>
</template>

<script type="text/ecmascript-6">
    import questionItem from 'components/questionItem.vue';
    const url = '/static/questionlist.json';
    export default {
        name: 'Index',
        data() {
            return {
                questions: '',
                questionId:'',
                lastIndex: 0,
                myApp: new Framework7(),
                loading: false,
                maxItems: 20,
                itemsPerload: 20
            }
        },
        created() {

            let _this = this;
            _this.$http.get(url).then((resp) => {
                console.log('http get');
                _this.questions = resp.body.questions.slice(0, 10);
            }, ()=> {
                console.log('error');
            });

        },
        methods: {

            getQuestions(){
                let _this = this;

                let $$ = Dom7;
                if (_this.loading) return;

                _this.loading = true;
                _this.lastIndex = $$('.question-list .question-item').length;

                if (_this.lastIndex >= _this.maxItems) {

                    _this.myApp.detachInfiniteScroll($$('.infinite-scroll'));

                    $$('.infinite-scroll-preloader').remove();
                    return;
                }
                _this.$http.get(url).then((resp) => {
                    console.log('http get');
                    let questions = resp.body.questions;
                    console.log(questions);
                    let html = '';
                    for (let val of questions) {
                        html += '<div class="question-item">' +
                                '<div class="question-inner">' +
                                '<div class="tit"><a class="tit-href" href="/question/'+val.id+'/">' + val.title + '</a></div>' +
                                '<div class="user-info">' +
                                '<a class="a-666" href="/user/'+val.answererUserId+'/"><span class="name">' + val.answerer + '</span><span>' + val.description + '</span></a>' +
                                '</div>' +
                                '<div class="ting-box clearfix">' +
                                '<div class="answerer-avatar dinline-l">' +
                                '<div class="paddingT"></div><a href="#"></a>' +
                                '<img src="' + val.answererAvatar + '" class="img-head"></div>' +
                                '<div class="item-audio dinline-l">' +
                                '<div class="btn-ting">' +
                                '<div class="btn-ting-txt"><span>¥</span><span class="price">1</span><span>听一下</span>' +
                                '</div>' +
                                '<a class="tit-href" href="/question/'+val.id+'/"></a>' +
                                ' </div> </div> </div>' +
                                '<div class="answer-info">' +
                                '<span>答案价值 100元 </span><span>，400人听过</span><span>，200人觉得赞</span>' +
                                ' </div></div></div>';
                    }
                    $$('.question-list').append(html);
                    _this.lastIndex = $$('.question-list .question-item').length;
                    _this.loading = false;
                }, ()=> {
                    setTimeout(function () {
                        _this.loading = false;
                    }, 3000);
                });
            }
        },
        components: {
            questionItem
        }
    }

</script>
<style lang="scss">
    body {
        background-color: red;
        .navbar {
            background-color: #56a7ff;
            color: #fff;
        }
    }
    @import "sass/style.scss";

</style>
