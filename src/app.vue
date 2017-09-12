<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios">
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding>Framework7</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page infinite-scroll>
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
                        <f7-block-title>Welcome to my App</f7-block-title>
                        <f7-block inner>
                            <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum
                                aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                        </f7-block>
                        <f7-block-title>Navigation</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about"
                                          title="Dynamic Route"></f7-list-item>
                        </f7-list>

                        <div class="page-content"  data-distance="150">
                            <div class="msg-list" v-if="media">
                                <div class="msg-item" v-for="item in media">
                                    <mediaItem :media="item"></mediaItem>
                                </div>
                            </div>
                        </div>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>

<script type="text/ecmascript-6">
    import mediaItem from 'components/mediaItem.vue';
    const url = 'http://localhost:63342/zhida/data/medialist.json';
    export default {
        name: 'Index',
        data() {
            return {
                media: ''
            }
        },
        created() {

            let _this = this;
            window.Dom7.ajax({
                dataType: 'json',
                url: url,
                success: function (resp) {

                    _this.media = resp.media.slice(0,9);
                    _this.scrollLoad();
                },
                error: function (xhr) {
                    console.log("Error on ajax call " + xhr);
                    window.f7.hideIndicator();
                }
            });

        },
        methods: {
            scrollLoad(){
                console.log('xxx');
                let myApp = new Framework7();
                let $$ = Dom7;
                // Loading flag
                let loading = false;
                // Last loaded index
                let lastIndex = $$('.msg-list .msg-item').length;
                // Max items to load
                let maxItems = 60;
                // Append items per load
                let itemsPerLoad = 20;
                // Attach 'infinite' event handler
                $$('.infinite-scroll').on('infinite', function () {
                    // Exit, if loading in progress
                    if (loading) return;
                    // Set loading flag
                    loading = true;
                    // Emulate 1s loading

                    if (lastIndex >= maxItems) {
                        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        // Remove preloader
                        $$('.infinite-scroll-preloader').remove();
                        return;
                    }
                    window.Dom7.ajax({
                        dataType: 'json',
                        url: url,
                        success: function (resp) {
                            console.log(resp);
                            let media = resp.media.slice(lastIndex + 1,(lastIndex + itemsPerLoad)>maxItems?maxItems:(lastIndex + itemsPerLoad));
                            console.log(media);
                            let html = '';
                            for (let i = 0; i <= itemsPerLoad; i++) {
                                html += '<div class="msg-item" v-if="media">' +
                                        '<div class="msg-inner">' +
                                        '<div class="tit"><a class="tit-href" href="#">'+media[i].title+'</a></div>' +
                                        '<div class="user-info">' +
                                        '<a class="a-666" href="#"><span class="name">'+media[i].author+'</span><span>'+media[i].description+'</span></a>' +
                                        '</div>' +
                                        '<div class="ting-box clearfix">' +
                                        '<div class="item-img dinline-l">' +
                                        '<div class="paddingT"></div><a href="#"></a>' +
                                        '<img src="'+media[i].imgurl+'" class="img-head"></div>' +
                                        '<div class="item-audio dinline-l">' +
                                        '<div class="btn-ting">' +
                                        '<div class="btn-ting-txt"><span>¥</span><span class="price">1</span><span>听一下</span>' +
                                        '</div> </div> </div> </div>' +
                                        '<div class="answer-info">' +
                                        '<span>答案价值 100元 </span><span>，400人听过</span><span>，200人觉得赞</span>' +
                                        ' </div></div></div>';
                            }
                            console.log(html);
                            $$('.msg-list').append(html);
                            lastIndex = $$('.msg-list .msg-item').length;

                        },
                        error: function (xhr) {
                            console.log("Error on ajax call1111 " + xhr);
                            window.f7.hideIndicator();
                        }
                    });
                });
            }
        },
        components: {
            mediaItem
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
