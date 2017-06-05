<template>
  <f7-page name="form">
    <f7-block-title>{{polyglot.lbl_basicInformation.title1}}</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.name1}}</f7-label>
        <f7-input type="text" :placeholder="polyglot.lbl_basicInformation.name1"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.name2}}</f7-label>
        <f7-input type="text" :placeholder="polyglot.lbl_basicInformation.name2"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.sex}}</f7-label>
        <f7-input type="select">
          <option value="1" selected>{{polyglot.lbl_basicInformation.man}}</option>
          <option value="2">{{polyglot.lbl_basicInformation.woman}}</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.email}}</f7-label>
        <f7-input type="email" :placeholder="polyglot.lbl_basicInformation.email"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.url}}</f7-label>
        <f7-input type="url" :placeholder="polyglot.lbl_basicInformation.url"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.birthDate}}</f7-label>
        <f7-input type="date" :placeholder="polyglot.lbl_basicInformation.birthDate" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item accordion-item :title="polyglot.lbl_basicInformation.contactAddress">
        <f7-accordion-content>
          <f7-block>
            <f7-grid no-gutter>
              <f7-col width="25"><p>{{polyglot.lbl_basicInformation.addressLabel}}</p></f7-col>
              <f7-col width="75"><input type="text" :placeholder="polyglot.lbl_basicInformation.addressLabel" class=""></f7-col>
              <f7-col width="25"><p>{{polyglot.lbl_basicInformation.phone}}</p></f7-col>
              <f7-col width="75"><input type="tel" :placeholder="polyglot.lbl_basicInformation.phone" class=""></f7-col>
              <f7-col width="100"><input type="text" :placeholder="polyglot.lbl_basicInformation.contactAddress" class=""></f7-col>
            </f7-grid>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.spouse}}</f7-label>
        <f7-input type="select">
          <option value="1">{{polyglot.lbl_basicInformation.ari}}</option>
          <option value="2">{{polyglot.lbl_basicInformation.nai}}</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.spouse2}}</f7-label>
        <f7-input type="select">
          <option value="1">{{polyglot.lbl_basicInformation.ari}}</option>
          <option value="2">{{polyglot.lbl_basicInformation.nai}}</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>{{polyglot.lbl_basicInformation.spouse3}}</f7-label>
        <f7-input type="text" placeholder="何人"></f7-input>
      </f7-list-item>
    </f7-list>
     <f7-block-title>{{polyglot.lbl_basicInformation.title4}}</f7-block-title>
    <f7-list>
      <f7-list-item smart-select smart-select-searchbar :title="polyglot.lbl_basicInformation.title4">
        <select name="sukiru" multiple="multiple">
          <optgroup label="スキル">
            <option value="java" selected>java</option>
            <option value="mysql">mysql</option>
            <option value="javascript">javascript</option>
            <option value="oracle">oracle</option>
            <option value="vue">vue</option>
          </optgroup>
        </select>
      </f7-list-item>
    </f7-list>
    <f7-block-title>{{polyglot.lbl_basicInformation.title2}}</f7-block-title>
    <f7-list>
      <f7-list-item accordion-item :title="polyglot.lbl_basicInformation.title2">
          <f7-accordion-content>
            <f7-block>
              <f7-grid no-gutter>
                <f7-col v-for="item in a" width="100">
                  <input type="date" v-model.trim="item.date" :placeholder="polyglot.lbl_basicInformation.ym" :value="item.date" class="">
                  <input type="text" v-model.trim="item.text" v-on:change="save()" :placeholder="polyglot.lbl_basicInformation.title2" :value="item.text" class="">
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
    </f7-list>
   <f7-block-title>{{polyglot.lbl_basicInformation.title3}}</f7-block-title>
    <f7-list>
      <f7-list-item accordion-item :title="polyglot.lbl_basicInformation.title2">
          <f7-accordion-content>
            <f7-block>
              <f7-grid no-gutter>
                <f7-col v-for="item in b" width="100">
                  <input type="date" :placeholder="polyglot.lbl_basicInformation.ym" :value="item.date" class="">
                  <input type="text" :placeholder="polyglot.lbl_basicInformation.title2" :value="item.text" class="">
                </f7-col>
              </f7-grid>
            </f7-block>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { initI18n } from '../utils/i18n';
import text from '../i18n/text.json';

export default {
  data : () => {
    return text;
  },
  computed : {
      polyglot : () => {
        return initI18n('jp-ja');
      }
  },
  methods:{
    save:() => {
      console.log(this.$data.a);
      //fs.writeFileSync('../i18n/text.json',);
    }
  }
}
</script>