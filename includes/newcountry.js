(function(){if(typeof window==="undefined"){return}window.Authy={};if(document.getElementsByClassName==null){document.getElementsByClassName=function(className,parentElement){var child,children,elements,i,length;children=(parentElement||document.body).getElementsByTagName("*");elements=[];child=void 0;i=0;length=children.length;while(i<length){child=children[i];if((" "+child.className+" ").indexOf(" "+className+" ")!==-1){elements.push(child)}i++}return elements};HTMLDivElement.prototype.getElementsByClassName=function(className){return document.getElementsByClassName(className,this)}}window.Authy.UI=function(){var absolutePosFor,buildItem,countriesList,disableAutocompleteAuthyToken,findAndSetupCountries,getKeyCode,hideAutocompleteList,processKey13,processKey38,processKey40,self,setActive,setCountryField,setupAuthyTokenValidation,setupCellphoneValidation,setupCountriesDropdown,setupCountriesDropdownPosition,setupEvents,setupTooltip,setupTooltipPosition,tooltipMessage,tooltipTitle;self=this;tooltipTitle="Authy Help Tooltip";tooltipMessage='This is a help tooltip for your users. You can set the message by doing: authyUI.setTooltip("title", "message");';countriesList=[{country:"Philippines (+63)",code:"63"}];setupCellphoneValidation=function(){var cellPhone;cellPhone=document.getElementById("authy-cellphone");if(!cellPhone){return}cellPhone.onblur=function(){if(cellPhone.value!==""&&cellPhone.value.match(/^([0-9][0-9][0-9])\W*([0-9][0-9]{2})\W*([0-9]{0,5})$/)){return cellPhone.style.backgroundColor="white"}else{return cellPhone.style.backgroundColor="#F2DEDE"}}};setupAuthyTokenValidation=function(){var token;token=document.getElementById("authy-token");if(!token){return}token.onblur=function(){if(token.value!==""&&token.value.match(/^\d+$/)){return token.style.backgroundColor="white"}else{return token.style.backgroundColor="#F2DEDE"}}};disableAutocompleteAuthyToken=function(){var token;token=document.getElementById("authy-token");if(!token){return}token.setAttribute("autocomplete","off")};setupTooltip=function(){var authy_help,tooltip;authy_help=document.getElementById("authy-help");if(!authy_help){return}tooltip=document.createElement("div");tooltip.setAttribute("id","authy-tooltip");tooltip.innerHTML='<a id="authy-tooltip-close"></a><h3 class="tooltip-title">'+tooltipTitle+'</h3><p class="tooltip-content">'+tooltipMessage+"</p>";document.body.appendChild(tooltip);document.getElementById("authy-help").onclick=function(){tooltip=document.getElementById("authy-tooltip");setupTooltipPosition(this,tooltip);return tooltip.style.display="block"};document.getElementById("authy-tooltip-close").onclick=function(){return document.getElementById("authy-tooltip").style.display="none"};setupTooltipPosition(authy_help,tooltip)};setupTooltipPosition=function(helpLink,tooltip){var pos,tooltipLeft,tooltipTop;pos=absolutePosFor(helpLink);tooltipTop=pos[0];tooltipLeft=pos[1]+helpLink.offsetWidth+5;return tooltip.setAttribute("style","top:"+tooltipTop+"px;left:"+tooltipLeft+"px;")};processKey40=function(listId){var activeElement,caId,countriesArr,countriesDropdown,i,li,_i,_len;caId="countries-autocomplete-"+listId;countriesDropdown=document.getElementById(caId);countriesArr=countriesDropdown.getElementsByTagName("li");i=0;for(_i=0,_len=countriesArr.length;_i<_len;_i++){li=countriesArr[_i];if(li.className==="active"&&countriesArr.length>(i+1)){activeElement=countriesArr[i+1];li.className="";setActive(activeElement);self.autocomplete(activeElement,false);break}i++}return false};processKey38=function(listId){var activeElement,caId,countriesArr,i;caId="countries-autocomplete-"+listId;countriesArr=document.getElementById(caId).getElementsByTagName("li");i=countriesArr.length-1;while(i>=0){if(document.getElementById(caId).getElementsByTagName("li")[i].className==="active"){document.getElementById(caId).getElementsByTagName("li")[i].className="";activeElement=null;if(i===0){activeElement=document.getElementById(caId).getElementsByTagName("li")[countriesArr.length-1]}else{activeElement=document.getElementById(caId).getElementsByTagName("li")[i-1]}setActive(activeElement);self.autocomplete(activeElement,false);return false}i--}document.getElementById(caId).getElementsByTagName("li")[0].setAttribute("class","active")};processKey13=function(listId){var obj;obj=document.getElementById("countries-autocomplete-"+listId).getElementsByClassName("active")[0];self.autocomplete(obj,true);return false};setActive=function(liElement){var li,liElements,listId,_i,_len;listId=liElement.getAttribute("data-list-id");liElements=document.getElementById("countries-autocomplete-"+listId).getElementsByTagName("li");for(_i=0,_len=liElements.length;_i<_len;_i++){li=liElements[_i];li.className=""}return liElement.className="active"};setupEvents=function(countriesInput,listId){if(!countriesInput){return}countriesInput.onblur=function(event){return processKey13(listId)};countriesInput.onfocus=function(){var countriesDropdown;countriesDropdown=document.getElementById("countries-autocomplete-"+listId);setupCountriesDropdownPosition(countriesInput,countriesDropdown);countriesDropdown.style.display="block"};countriesInput.onkeyup=function(event){var keyID;document.getElementById("countries-autocomplete-"+listId).style.display="block";keyID=getKeyCode(event);switch(keyID){case 13:processKey13(listId);return false;case 40:if(processKey40(listId)===false){return false}break;case 38:if(processKey38(listId)===false){return false}}return self.searchItem(listId)};countriesInput.onkeypress=function(event){if(getKeyCode(event)===13){processKey13(listId);return false}};document.getElementById("countries-autocomplete-"+listId).onclick=function(e){if(e&&e.stopPropagation){hideAutocompleteList(listId);return e.stopPropagation()}else{e=window.event;return e.cancelBubble=true}};document.getElementById("countries-input-"+listId).onclick=function(e){if(e&&e.stopPropagation){e.stopPropagation();countriesInput.focus();return countriesInput.select()}else{e=window.event;return e.cancelBubble=true}};return document.onclick=function(){hideAutocompleteList(listId)}};hideAutocompleteList=function(listId){var autocompleteList;autocompleteList=document.getElementById("countries-autocomplete-"+listId);if(autocompleteList){return autocompleteList.style.display="none"}};buildItem=function(classActive,country,listId){var cc,flag,li,name;cc=country.country.substring(0,2).toLowerCase()+country.code;li=document.createElement("li");if(classActive){li.setAttribute("selected",true)}li.setAttribute("class",classActive);li.setAttribute("data-list-id",listId);li.setAttribute("rel",country.code);li.setAttribute("data-name",country.country);li.onmouseover=function(event){return setActive(li)};flag=document.createElement("span");flag.setAttribute("class","aflag flag-"+cc);li.appendChild(flag);name=document.createElement("span");name.innerHTML=country.country;li.appendChild(name);return li};absolutePosFor=function(element){var absLeft,absTop;absTop=0;absLeft=0;while(element){absTop+=element.offsetTop;absLeft+=element.offsetLeft;element=element.offsetParent}return[absTop,absLeft]};setupCountriesDropdown=function(countriesSelect,listId){var activeItem,buf,classActive,countries,countriesAutocompleteList,countriesDropdown,countriesInput,countriesInputType,countryCodeValue,i,listItem,name,placeholder,selectValue;if(!countriesSelect){return}countries=[];i=0;while(i<countriesSelect.getElementsByTagName("option").length){buf=[];buf[0]=countriesSelect.getElementsByTagName("option")[i].value;buf[1]=countriesSelect.getElementsByTagName("option")[i].innerHTML;countries.push(buf);i++}countriesSelect.setAttribute("style","display:none");name=countriesSelect.getAttribute("name");countriesSelect.removeAttribute("name");countriesDropdown=document.createElement("div");countryCodeValue=document.createElement("input");countryCodeValue.setAttribute("type","hidden");countryCodeValue.setAttribute("id","country-code-"+listId);countryCodeValue.setAttribute("name",name);classActive="";countriesAutocompleteList=document.createElement("ul");if(countriesSelect.getAttribute("data-value")){i=0;selectValue=countriesSelect.getAttribute("data-value").replace("+","");while(i<countriesList.length){if(countriesList[i].code===selectValue){activeItem=countriesList[i];break}i++}}if(!activeItem){activeItem=countriesList[0]}i=0;while(i<countriesList.length){classActive=(activeItem===countriesList[i]?"active":"");listItem=buildItem(classActive,countriesList[i],listId);countriesAutocompleteList.appendChild(listItem);if(activeItem===countriesList[i]){activeItem=listItem}i++}countriesDropdown.innerHTML="";countriesDropdown.appendChild(countriesAutocompleteList);document.body.appendChild(countriesDropdown);countriesInput=document.createElement("input");countriesInput.setAttribute("id","countries-input-"+listId);countriesInput.setAttribute("class","countries-input");countriesInput.setAttribute("type","text");countriesInput.setAttribute("autocomplete","off");if(countriesSelect.getAttribute("required")!==null){countriesInput.setAttribute("required","required")}placeholder=countriesSelect.getAttribute("placeholder");if(placeholder!=null){countriesSelect.removeAttribute("placeholder");countriesInput.setAttribute("placeholder",placeholder)}countriesInputType=countriesSelect.getAttribute("data-show-as");if(/^number/i.exec(countriesInputType)){countriesInput.setAttribute("data-show-as","number")}countriesSelect.parentNode.insertBefore(countriesInput,countriesSelect);countriesSelect.parentNode.appendChild(countryCodeValue);countriesDropdown.setAttribute("id","countries-autocomplete-"+listId);countriesDropdown.setAttribute("class","countries-autocomplete");setupCountriesDropdownPosition(countriesInput,countriesDropdown);setupEvents(countriesInput,listId);self.autocomplete(activeItem)};setupCountriesDropdownPosition=function(countriesInput,countriesDropdown){var pos,width;pos=absolutePosFor(countriesInput);width=countriesInput.offsetWidth;if(width<220){width=220}return countriesDropdown.setAttribute("style","width: "+(width-5)+"px; top: "+(pos[0]+2+countriesInput.offsetHeight)+"px; left: "+(pos[1]-2)+"px;")};findAndSetupCountries=function(){var authyCountries,countries,i;authyCountries=document.getElementById("authy-countries");if(authyCountries){setupCountriesDropdown(authyCountries,0)}countries=document.getElementsByClassName("authy-countries");i=0;while(i<countries.length){setupCountriesDropdown(countries[i],i+1);i++}};setCountryField=function(){var country,countryCode,defaultListId,field,_i,_len,_results;defaultListId=0;field=document.getElementById("authy-countries");if(!field){return}countryCode=field.value;if(countryCode!==""){_results=[];for(_i=0,_len=countriesList.length;_i<_len;_i++){country=countriesList[_i];if(country.code===countryCode){self.autocomplete(buildItem("active",country,defaultListId),true);break}else{_results.push(void 0)}}return _results}};getKeyCode=function(event){var keyCode;if(event&&event.which){keyCode=event.which}else{if(window.event){keyCode=window.event.keyCode}}return keyCode};this.init=function(){setupAuthyTokenValidation();disableAutocompleteAuthyToken();setupTooltip();findAndSetupCountries();setCountryField();return setupCellphoneValidation()};this.searchItem=function(listId){var classActive,countriesAutocompleteList,countriesInput,countryItem,countryWords,cw,dropdownMenu,firstCountryCodeFound,i,matches,reg,str;classActive="active";countriesInput=document.getElementById("countries-input-"+listId);str=countriesInput.value;countriesAutocompleteList=document.createElement("ul");firstCountryCodeFound=null;matches=false;str=str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");reg=new RegExp("^"+str,"i");i=0;while(i<countriesList.length){countryItem=countriesList[i];countryWords=countryItem.country.toLowerCase().split(/\s+/);cw=0;while(cw<countryWords.length){if((countryWords[cw].length>2&&countryWords[cw].match(reg))||(""+countryItem.code).match(reg)){countriesAutocompleteList.appendChild(buildItem(classActive,countryItem,listId));classActive="";matches=true;if(firstCountryCodeFound==null){firstCountryCodeFound=countryItem.code}break}cw++}i++}if(matches){dropdownMenu=document.getElementById("countries-autocomplete-"+listId);dropdownMenu.innerHTML="";dropdownMenu.appendChild(countriesAutocompleteList);return self.setCountryCode(listId,firstCountryCodeFound)}};this.autocomplete=function(obj,hideList){var countriesInput,countryCode,listId;listId=obj.getAttribute("data-list-id");countryCode=obj.getAttribute("rel");countriesInput=document.getElementById("countries-input-"+listId);if(countriesInput.getAttribute("data-show-as")==="number"){countriesInput.value="+"+countryCode}else{countriesInput.value=obj.getAttribute("data-name")}self.setCountryCode(listId,countryCode);if(hideList){hideAutocompleteList(listId)}};this.setCountryCode=function(listId,countryCode){return document.getElementById("country-code-"+listId).value=countryCode};this.setTooltip=function(title,msg){var tooltip;tooltip=document.getElementById("authy-tooltip");if(!tooltip){return}tooltip.getElementsByClassName("tooltip-title")[0].innerHTML=title;tooltip.getElementsByClassName("tooltip-content")[0].innerHTML=msg}};Authy.UI.instance=function(){if(!this.ui){this.ui=new Authy.UI();this.ui.init()}return this.ui};window.onload=function(){return Authy.UI.instance()}}).call(this);