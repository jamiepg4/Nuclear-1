!function(t){"use strict";function s(t,s){this._init(t,s)}function e(t,s){this._init(t,s)}s.prototype={_init:function(t,s){this.zone=t;var e={selectButton:"#dropzone-select-button",uploadInput:"#dropzone-file",outputList:"#upload-list",indicator:null,enabled:!0,append:!0};this.options=$.extend(e,s),this.action=$(this.zone).attr("action"),this.fileQueue=[],this.statusIndicators=[],this.current=0,this.inProcess=!1,this.maxsize=this.zone.data("maxsize"),this._initEvents()},_initEvents:function(){var s=this;this.zone.bind("dragenter, dragover",function(t){t.preventDefault(),t.stopPropagation(),$(this).addClass("dragenter")}),this.zone.bind("dragleave",function(){$(this).removeClass("dragenter")}),$(t).bind("drop",function(t){t.preventDefault(),t.stopPropagation()}),this.zone.bind("drop",function(t){t.preventDefault(),t.stopPropagation(),s.queue(t.originalEvent.dataTransfer.files),$(this).removeClass("dragenter")}),$(this.options.uploadInput).bind("change",function(){s.queue($(this)[0].files)}),this.options.selectButton!==!1&&$(this.options.selectButton).bind("click",function(t){t.preventDefault(),t.stopPropagation(),$(s.options.uploadInput).click()})},queue:function(t){if(!this.options.enabled)return!1;for(var s=0;s<t.length;s++)if(t[s].size<this.maxsize){var e=new FormData;e.append("file",t[s]),this.fileQueue.push(e);var i=this._createIndicator(html_entities(t[s].name),t[s].size);this.statusIndicators.push(i),this.options.outputList!==!1&&(this.options.append===!0?$(this.options.outputList).append(i.parent):$(this.options.outputList).prepend(i.parent))}this.inProcess===!1&&this._upload()},_createIndicator:function(s,e){var i=this.options.indicator?this.options.indicator:"Indicator";return new(i=t[i])(s,e)},_upload:function(){var t=this;if(this.current<this.fileQueue.length){this.inProcess=!0;var s=this.fileQueue[this.current],e=this.statusIndicators[this.current];$.ajax({xhr:function(){var t=$.ajaxSettings.xhr();return t.upload&&t.upload.addEventListener("progress",function(t){e.setProgress(loaded(t))}),t},url:t.action,type:"POST",contentType:!1,processData:!1,cache:!1,data:s,success:function(t){e.complete(t)}}).always(function(){t.current++,t._upload()})}else this.inProcess=!1}},t.Uploader=s,e.prototype={_init:function(t,s){this.parent=$('<li class="material-light"></li>'),this.progressContainer=$('<div class="upload-progress-container"></div>').appendTo(this.parent),this.progressBar=$('<div class="upload-progress-bar"></div>').appendTo(this.progressContainer),this.messageWrapper=$('<div class="upload-message-wrapper"></div>').appendTo(this.parent),this.thumbnail=$('<span class="upload-thumbnail"></span>').appendTo(this.messageWrapper),this.container=$("<p></p>").appendTo(this.messageWrapper),this.filename=$('<span class="upload-text">'+t+"</span>").appendTo(this.container),this.message=$('<span class="upload-text muted">'+readable_size(s)+"</span>").appendTo(this.container),this.container.clone().appendTo(this.progressContainer)},setProgress:function(t){this.progressBar.width(t.toString()+"%")},complete:function(t){this.setProgress(100),"success"===t.type?this._success(t.response):"error"===t.type&&this._error(t)},_success:function(t){$(this.parent).addClass("complete"),this.thumbnail.html(t.thumbnail),this.message.html(t.mimetype+" | "+this.message.text())},_error:function(t){$(this.parent).addClass("error"),$(this.thumbnail).html('<i class="icon-cancel"></i>'),$(this.message).html(t.response)}},t.Indicator=e}(window);