
var vueHTML = `
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script> 
<style>@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: 'Montserrat', sans-serif;
}

#header .controls {
  padding: 35px 0 0;
}

.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 9px;
  height: 9px;
  margin: 3px;
  border-radius: 50%;
  border: 3px solid #ff9800;
  border-color: #ff9800 transparent #ff9800 transparent;
  -webkit-animation: lds-dual-ring 1.2s linear infinite;
          animation: lds-dual-ring 1.2s linear infinite;
}

.lds-dual-ring--big {
  width: 30px;
  height: 30px;
}

.lds-dual-ring--big:after {
  content: " ";
  display: block;
  width: 14px;
  height: 14px;
  margin: 3px;
  border-radius: 50%;
  border: 5px solid #ff9800;
  border-color: #ff9800 transparent #ff9800 transparent;
}

@-webkit-keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.slide-leave-active,
.slide-enter-active {
  -webkit-transition: .5s;
  transition: .5s;
}

.slide-enter {
  -webkit-transform: translate(0, 100%);
          transform: translate(0, 100%);
}

.slide-leave-to {
  -webkit-transform: translate(0, 200%);
          transform: translate(0, 200%);
}

.slide_right-leave-active,
.slide_right-enter-active {
  -webkit-transition: .5s;
  transition: .5s;
}

.slide_right-enter {
  -webkit-transform: translate(100%, 0);
          transform: translate(100%, 0);
}

.slide_right-leave-to {
  -webkit-transform: translate(200%, 0);
          transform: translate(200%, 0);
}

.h1 {
  font-size: 28px;
  font-weight: 800;
  color: #000;
}

.h2 {
  font-size: 24px!important;
  font-weight: 700!important;
  padding: 20px 0!important;
  color: #000;
}

#app {
  width: 100%;
  -webkit-transition: 0.4s width;
  transition: 0.4s width;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  z-index: 999;
  overflow: hidden;
}

.check-list-page {
  position: relative;
  background: #fff;
}

.check-list-page__container {
  padding: 0 40px;
  min-width: 1200px;
  padding-bottom: 50px;
}

.check-list-page__wrapper {
  max-width: 80%;
  min-width: 800px;
  padding: 0 20px;
  margin: auto;
}

.check-list-page__close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
}

.check-list-page__close:hover {
  opacity: 1;
}

.check-list-page__close:before, .check-list-page__close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #3c7af3;
}

.check-list-page__close:before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.check-list-page__close:after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.check-list-page__close--left {
  right: unset;
  left: 32px;
}

.check-list-page__title {
  padding: 20px 0;
}

.check-list-page__sale-comment {
  margin-top: 50px;
  padding: 20px 50px;
  margin: auto;
  background: #1a8ad8;
  border-radius: 15px;
}

.check-list-page__sale-title {
  color: #fff;
}

.check-list-page__sale-text {
  color: #fff;
  font-size: 18px;
}

.check-list-page__info {
  top: 0;
  right: 0;
  position: absolute;
  width: 60%;
  min-width: 300px;
  background: #fff;
  height: 100%;
  -webkit-box-shadow: -4px 9px 15px #86c5f1;
          box-shadow: -4px 9px 15px #86c5f1;
}

.checklist__title {
  font-size: 14px;
  padding-right: 25px;
}

.checklist__title--main {
  font-size: 16px;
  font-weight: bold;
}

.checklist__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
}

.checklist__block {
  width: calc(25% - 10px);
  margin: 5px;
  padding: 30px;
  background: #E6F4F1;
  border-radius: 15px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: relative;
  -webkit-transition: 0.2s -webkit-box-shadow;
  transition: 0.2s -webkit-box-shadow;
  transition: 0.2s box-shadow;
  transition: 0.2s box-shadow, 0.2s -webkit-box-shadow;
}

.checklist__block:hover {
  -webkit-box-shadow: 0 0 15px #c1c0c0;
          box-shadow: 0 0 15px #c1c0c0;
}

.checklist__checkbox {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid #3a3a3a;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
}

.checklist__checkbox:hover {
  border-color: green;
}

.checklist__lvl2 {
  position: relative;
  padding: 10px 0 0 35px;
}

.checklist__item {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #000;
}

.checklist__item.done {
  color: green;
}

.checklist__item.done .checklist__checkbox {
  border-color: green;
}

.checklist__item.done .checklist__checkbox::after {
  content: '';
  display: block;
  border-bottom: 2px solid green;
  border-right: 2px solid green;
  width: 8px;
  height: 12px;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
  position: absolute;
  top: 1px;
  left: 5px;
}

.checklist__item.inProgress {
  color: #ff9800;
}

.checklist__item.inProgress .checklist__checkbox {
  border-color: #ff9800;
}

.checklist__done-count {
  position: absolute;
  right: 30px;
  top: 20px;
}

.checklist .checklist__info-button {
  position: absolute;
  right: 0;
  border: 1px solid;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  font-size: 12px;
  color: #1a8ad8;
  opacity: 0.5;
  cursor: pointer;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
}

.checklist .checklist__info-button:hover {
  color: #000;
  opacity: 1;
  -webkit-transition: 0.1s all ease-in;
  transition: 0.1s all ease-in;
}

.project-status {
  width: 100%;
  height: 30px;
  background: #b1cbff;
  position: relative;
}

.project-status__progress {
  height: 100%;
  background: #3c7af3;
  width: 0;
  -webkit-transition: 0.4s width;
  transition: 0.4s width;
}

.project-status__text {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  z-index: 9999;
  position: absolute;
  line-height: 30px;
  top: 0;
}

.project-status__button {
  background: #2f68bad6;
  color: #fff;
  outline: none;
  border: none;
  padding: 2px 4px 4px 4px;
  cursor: pointer;
  border-radius: 4px;
}

.info-side__container {
  height: 100%;
  padding: 60px 40px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: relative;
}

.info-side__title {
  color: #000;
}

.info-side__text {
  color: #000;
  font-size: 16px;
  overflow-y: auto;
  height: 100%;
}

.info-side__text ul, .info-side__text ol {
  margin-left: 20px;
}

.info-side__text p {
  padding: 10px 0;
}

.info-side__text::-webkit-scrollbar-track {
  background-color: transparent;
}

.info-side__text::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

.info-side__text::-webkit-scrollbar-thumb {
  background-color: #1a8ad8;
  border: 2px solid #fff;
}

.info-side__comment {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  padding-bottom: 15px;
  font-size: 16px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.info-side__comment--block {
  color: red;
}

.info-side__comment--inProgress {
  color: #ff9800;
}

.info-side__comment-text {
  padding-left: 5px;
  font-size: 16px;
}

.info-side__comment-icon {
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 28px;
}
/*# sourceMappingURL=style.css.map */
</style>   

<div id="app" v-bind:class="{open : open}">
        <div class="project-status">
            <div class="project-status__progress" v-bind:style="{width: progress + '%'}"></div>
            <div class="project-status__text">
                <span class="project-status__count">
                    Ваш проект настроен на {{progress}} % &nbsp; &nbsp;
                    <button class="project-status__button" @click="openClose()">Чеклист</button>
                </span>
            </div>
        </div>

        <transition name="slide">
            <div class="check-list-page" v-if="open" id="checkListPage">
                <div class="check-list-page__container">
                    <div class="check-list-page__close" @click="openClose()"></div>
                    <div class="check-list-page__title h1">Этапы создания интернет-магазина</div>
                    <div class="check-list-page__wrapper">
                        <div class="check-list-page__sale-comment">
                            <div class="check-list-page__sale-title h2">Уточнения по проекту озвученные вашему менеджеру
                            </div>
                            <div class="check-list-page__sale-text">
                                {{sites[0][2]}}
                            </div>
                        </div>
                    </div>
                    <div class="check-list-page__checklist checklist">
                        <div class="checklist__title h2">Чеклист</div>
                        <div class="checklist__list">
                            <template v-for="item of checkList">
                                <template v-if="item[1] === 0">
                                    <div class="checklist__block">
                                        <div class="checklist__item" v-bind:class="{done : doneCounter(item[0],true) }">
                                            <div class="checklist__checkbox"></div>
                                            <div class="checklist__title checklist__title--main">{{item[2]}}</div>
                                            <div class="checklist__done-count">{{doneCounter(item[0])}}</div>
                                        </div>
                                        <div class="checklist__lvl2">
                                            <template v-for="innerItem of checkList">
                                                <template v-if="innerItem[1] === item[0]">
                                                    <div class="checklist__item"
                                                        v-bind:class="statusCheck(innerItem[0])">
                                                        <div class="checklist__checkbox"
                                                            @click="doneClick(innerItem[0],innerItem[2])">
                                                            <template v-if="inProgressCheck(innerItem[0])">
                                                                <div class="lds-dual-ring"></div>
                                                            </template>
                                                        </div>
                                                        <div class="checklist__title">{{innerItem[2]}}</div>
                                                        <div class="checklist__info-button" @click="openCloseInfo(innerItem[0],innerItem[4])">?
                                                        </div>
                                                    </div>
                                                </template>
                                            </template>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </div>
                    </div>
                    <transition name="slide_right">
                        <div class="check-list-page__info info-side" v-if="info.open">
                            <div class="info-side__container">
                                <div class="check-list-page__close check-list-page__close--left"
                                    @click="openCloseInfo()"></div>
                                <div class="info-side__title h2">Больше информации</div>
                                <div class="info-side__comment info-side__comment--inProgress" v-if="info.comment"><div class="info-side__comment-icon"><div class="lds-dual-ring lds-dual-ring--big"></div></div><div class="info-side__comment-text">{{info.commentText}}</div></div>
                                <div class="info-side__comment info-side__comment--block" v-if="info.block"><div class="info-side__comment-icon">!</div> <div class="info-side__comment-text">{{info.blockText}}</div></div>
                                <div class="info-side__text" v-html="info.text"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>
    </div>`;



function StartVueProggress() {


  document.querySelector('#header .top.padder').innerHTML += vueHTML;

  vueApp();

}



function vueApp() {


  function update(data) {
    app.checkList = data.checkList;
    app.sites[0][1] = data.sites[0][1];
    app.sites[0][2] = data.sites[0][2];
    try {
      var sites3 = data.sites[0][3].split(',');
      app.sites[0][3] = [];
      for (item of sites3) {
        app.sites[0][3].push(parseInt(item));
      }
    } catch (e) { };
    try {
      var sites4 = data.sites[0][4].split(',');
      app.sites[0][4] = [];
      for (item of sites4) {
        app.sites[0][4].push(parseInt(item));
      }
    } catch (e) { };
    app.progressBarUpdate();
    //app.sites[0][4] = data.sites[0][4].split(',');
  }

  async function getData() {
    // `https://script.google.com/macros/s/AKfycbyI8LJsInMo9RjnFRodPzfT_0gUT-dxSne8fwwm5PWQQQE2Fqp87ifo4ZEei0lTxWTr6g/exec${'?domain='+window.location.hostname}`
    var app = `https://script.google.com/macros/s/AKfycbyI8LJsInMo9RjnFRodPzfT_0gUT-dxSne8fwwm5PWQQQE2Fqp87ifo4ZEei0lTxWTr6g/exec${'?domain=' + window.location.hostname}`,
      output = {},
      xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        try {
          var output = JSON.parse(xhr.response);
        } catch (e) { }
      }
      console.log('data was get');
      output;
      update(output);
    }
    xhr.send()
  };


  var app = new Vue({
    el: '#app',
    data: {
        open: false,
        api:{
            saveDataHref:'https://script.google.com/macros/s/AKfycbzHchBnLYqROyjervt9_kXMp5rzVgIMJhA9Mf9TWYpLqB-3snIAXUcJV-O6KesN0pTM0g/exec',
            getDataHref: 'https://script.google.com/macros/s/AKfycbyI8LJsInMo9RjnFRodPzfT_0gUT-dxSne8fwwm5PWQQQE2Fqp87ifo4ZEei0lTxWTr6g/exec',
            doneId :'doneId',
            checklistBTN : 'checklistBTN',
            infoBTN : 'infoBTN',
            statisticsHref: 'https://script.google.com/macros/s/AKfycbzB0BLvFjdNbD2H5VNFIZN3lDkix1xhqJHoyqHni_0UYCb30sZK9DKaRbaFD-VzW1zv/exec'
        },
        info: {
            open: false,
            text: 'об`яснение по пункту',
            comment: false,
            commentText: 'Сейчас этой задачей занимается ваш менеджер. Он свяжется с вами по окончанию)',
            block: false,
            blockText: 'Этот пункт для вас может выполнить только ваш менеджер. Пожалуйста свяжитесь с ним'
        },
        checkList: [
        ],
        sites: [
            [
                1,
                "",
                "",
                [],
                []
            ]
        ],
        progress: 0,
        domain: "satan666",
    },
    computed: {
    },
    beforeCreate() {
        getData();
    },
    methods: {
        checkListTitle: () => {
            let out = [];
            for (item in this.checkList) {
                if (this.checkList[item][1] == 0) out.push(this.checkList[item][2]);
            }
            return out;
        },
        statusCheck: function (itemId) {
            //let done = this.sites[0][3].split(',');
            let done = this.sites[0][3];
            for (item of done) {
                if (parseInt(item) == parseInt(itemId)) {
                    return 'done';
                } else {
                    if (this.inProgressCheck(itemId)) return 'inProgress';
                }
            }
            if (this.inProgressCheck(itemId)) return 'inProgress';
        },
        doneCounter: function (itemId, check = false) {
            //let done = this.sites[0][3].split(','),
            let done = this.sites[0][3],
                all = 0,
                doneCount = 0;
            for (listItem of this.checkList) {
                if (listItem[1] == parseInt(itemId)) {
                    all++;
                    for (item of done) {
                        if (listItem[0] == parseInt(item)) {
                            doneCount++;
                        }
                    }
                }
            };
            if (check) {
                return doneCount == all;
            }
            return `${doneCount}/${all}`;
        },
        inProgressCheck: function (itemId) {
            let inProgress = this.sites[0][4];
                for (item of inProgress) {
                    if (parseInt(item) == parseInt(itemId)) {
                        return true;
                    }
                }
        },
        openClose: function () {
            if (this.open){
                this.open = false
            }
            else if (!this.open){ this.open = true;
                this.sendInfo(this.api.checklistBTN,'true');}
        },
        blockCheck: function (itemId) {
            for (i of this.checkList) {
                if (parseInt(i[0]) == parseInt(itemId)) {
                    if (parseInt(i[3]) == 0) {
                        return true
                    }
                }
            }
            return false;
        },
        openCloseInfo: function (itemId = -1, text) {
            if (this.info.text != text) {
                if (text == '' || text == undefined) {
                    this.info.text = 'Свяжитесь с вашим менеджером для уточнений и мы все расскажем по этому пункту =)';
                }
                else {
                    this.info.text = text;
                }
            }
            if (itemId >= 0) {
                //!----- Проверка статуса "В работе"
                if (this.inProgressCheck(itemId)) {
                    this.info.comment = true;
                }
                else { this.info.comment = false; }
                //!----- ПРоверка на блок отметки

                if (this.blockCheck(itemId)) {
                    this.info.block = true;
                }
                else {
                    this.info.block = false;
                }
            }
            //------ открыват / закрывает 
            if (this.info.open){ 
                this.info.open = false;
            }
            else if (!this.info.open){ 
                this.sendInfo(this.api.infoBTN,'true');
                this.info.open = true;
            }
            
        },
        doneClick: function (itemId,itemName) {
            let index = this.sites[0][3].indexOf(itemId);
            for(item of this.checkList){
                if(itemId == item[0]){
                    if(index < 0 && parseInt(item[3]) != 0){
                        this.sites[0][3].push(parseInt(itemId))
                        console.log('donePush');
                        this.sendStatistics('done',itemName);
                    }else if(parseInt(item[3]) != 0) {
                        this.sites[0][3].splice(index, 1);
                        this.sendStatistics('UnclickDone',itemName);
                    }else if(parseInt(item[3]) == 0) {
                        this.sendStatistics('TryToClickBlockedItem',itemName);
                    }
                }
            }
            this.progressBarUpdate();
            this.$forceUpdate();
            this.sendInfo(this.api.doneId,this.sites[0][3]);
            
            

        },
        sendInfo: function (param, value) {
            // `${this.api.saveDataHref}?domain=${window.location.hostname}&${param}=${value}`
            //? console.log(`${this.api.saveDataHref}?domain=${window.location.hostname}&${param}=${value}`);
            var app = `${this.api.saveDataHref}?domain=${window.location.hostname}&${param}=${value}`,
                xhr = new XMLHttpRequest();
            xhr.open('GET', app);
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) return;
                if (xhr.status == 200) {
                    try {
                        var output = JSON.parse(xhr.response);
                    } catch (e) { }
                }
                console.log('data was send');
            }
            xhr.send()
        },
        sendStatistics: function(action='other',title='без названия'){
                console.log(`${this.api.statisticsHref}?domain=${window.location.hostname}&action=${action}&title=${title}`);
                var app = `${this.api.statisticsHref}?domain=${window.location.hostname}&action=${action}&title=${title}`,
                    xhr = new XMLHttpRequest();
                xhr.open('GET', app);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== 4) return;
                    if (xhr.status == 200) {
                        try {
                            var output = JSON.parse(xhr.response);
                        } catch (e) { }
                    }
                    console.log('stat was send');
                }
                xhr.send()
        },
        progressBarUpdate: function(){
            let done = this.sites[0][3],
                notParent = 0;
            for(let item of this.checkList){
                if(item[1] != 0){
                    notParent++;
                }
            };
            out = done.length / notParent * 100;
            this.progress = Math.round(out);
        }

    }
});




}


//StartVueProggress();
window.onload = function () {
  console.log('StartVueProggress')
  setTimeout(StartVueProggress,2000);
};









