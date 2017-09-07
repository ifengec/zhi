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
          <f7-page>
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
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-item>
                <div class="msg-item">
                  <div class="msg-inner">
                    <div class="tit"><a class="tit-href" href="#">开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒开车技术哪家强？冯工开车稳当当，我服的
                      呵呵哒</a></div>
                    <div class="user-info">
                      <a class="a-666" href="#"><span class="name">伐木累</span><span>资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木资深老伐木</span></a>
                    </div>
                    <div class="ting-box clearfix">
                      <div class="item-img dinline-l"><a href="#"><img src="./img/head-img.jpg" class="img-head"></a></div>
                      <div class="item-audio dinline-l">
                        <div class="btn-ting">
                          <div class="btn-ting-txt"><span>¥</span><span class="price">1</span><span>听一下</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="answer-info">
                      <span>答案价值 100元 </span><span>，400人听过</span><span>，200人觉得赞</span>
                    </div>
                  </div>
                </div>
              </f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss">
  body{
   background-color: red;
    .navbar{
      background-color: #56a7ff;
      color: #fff;
    }
  }
 @import "sass/scss/media.scss";

</style>
