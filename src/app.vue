<template>
  <!-- App -->
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-block class="text-center">
         <img :src="imgUrl" class="circular--squareP">
         <p>{{lblUserNm}}</p>
      </f7-block>
      <f7-list>
        <f7-list-item :link="formUrl" :title="lbl_basicInformation.title1" ref="fos"></f7-list-item>
        <f7-list-item :link="aboutUrl" :title="lbl_basicInformation.title2"></f7-list-item>
        <f7-list-item :link="dynamicUrl" :title="lbl_basicInformation.title3"></f7-list-item>
      </f7-list>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-back" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>{{lblTitle}}</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-af></f7-af>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
import mif from './pages/basicInformation.vue'
import Constant from './utils/constant';
import {initI18n} from　'./utils/i18n';
var d = initI18n('jp-ja');
d.imgUrl=Constant.AVATAR;
export default {
  components: {
    f7Af : mif
  },
  data: () => {
      return d;
  },
  computed:{
    dynamicUrl: ()=>{
      return "/dynamic-route/blog/45/post/125/?foo=bar#about/";
    },
    formUrl:()=>{
      return "/basicInformation/";
    }
    ,
    aboutUrl:()=>{
      return "/about/";
    }
  }
};
</script>