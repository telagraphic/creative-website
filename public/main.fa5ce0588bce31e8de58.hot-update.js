/*! For license information please see main.fa5ce0588bce31e8de58.hot-update.js.LICENSE.txt */
self.webpackHotUpdatecreative_boilerplate("main",{"./app/classes/Page.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var s=i("./node_modules/lodash/each.js"),n=i.n(s),a=i("./node_modules/lodash/map.js"),l=i.n(a),o=i("./node_modules/prefix/index.js"),h=i.n(o),r=i("./node_modules/gsap/index.js"),m=i("./node_modules/normalize-wheel/index.js"),c=i.n(m),d=i("./app/animations/Title.js"),u=i("./app/animations/Paragraph.js"),p=i("./app/animations/Label.js");Object(function(){var e=new Error("Cannot find module 'animations/Highlights'");throw e.code="MODULE_NOT_FOUND",e}());class g{constructor({element:e,elements:t,id:i}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabels:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]'},this.id=i,this.transformPrefix=h()("transform"),this.scroll={current:0,target:0,last:0,limit:0},this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animationsTitles=l()(this.elements.animationsTitles,(e=>new d.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=l()(this.elements.animationsParagraphs,(e=>new u.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=l()(this.elements.animationsLabels,(e=>new p.default({element:e}))),this.animations.push(...this.animationsLabels),this.animationsHighlights=l()(this.elements.animationsHighlights,(e=>new Highlight({element:e}))),this.animations.push(...this.animationsHighlights)}show(){return new Promise((e=>{this.animationIn=r.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=r.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=c()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),n()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=r.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("wheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("wheel",this.onMouseWheelEvent)}}}},(function(e){"use strict";e.h=()=>"056c93974e2207604ca3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGl2ZS1ib2lsZXJwbGF0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vY3JlYXRpdmUtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJhbmltYXRpb25zUGFyYWdyYXBocyIsImFuaW1hdGlvbnNMYWJlbHMiLCJhbmltYXRpb25zSGlnaGxpZ2h0cyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJhbmltYXRpb25zIiwibWFwIiwiVGl0bGUiLCJwdXNoIiwiUGFyYWdyYXBoIiwiTGFiZWwiLCJIaWdobGlnaHQiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sIm1hcHBpbmdzIjoiO3NrQkFXZSxNQUFNQSxFQUNuQkMsYUFBWSxRQUNWQyxFQURVLFNBRVZDLEVBRlUsR0FHVkMsSUFFQUMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosRUFDSEssaUJBQWtCLDJCQUNsQkMscUJBQXNCLCtCQUN0QkMsaUJBQWtCLDJCQUNsQkMscUJBQXNCLGdDQUd4Qk4sS0FBS0QsR0FBS0EsRUFDVkMsS0FBS08sZ0JBQWtCQyxJQUFPLGFBRTlCUixLQUFLUyxPQUFTLENBQ1pDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEVBQ05DLE1BQU8sR0FHVGIsS0FBS2Msa0JBQW9CZCxLQUFLZSxhQUFhQyxLQUFLaEIsTUFJbERpQixTQUNFakIsS0FBS0gsUUFBVXFCLFNBQVNDLGNBQWNuQixLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxHQUVoQkUsS0FBS1MsT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxNQUFPLEdBR1RPLElBQUtwQixLQUFLRSxrQkFBa0IsQ0FBQ21CLEVBQU9DLEtBRWhDRCxhQUFpQkUsT0FBT0MsYUFDeEJILGFBQWlCRSxPQUFPRSxVQUN4QkMsTUFBTUMsUUFBUU4sR0FFZHJCLEtBQUtGLFNBQVN3QixHQUFPRCxHQUVyQnJCLEtBQUtGLFNBQVN3QixHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJyQixLQUFLRixTQUFTd0IsR0FBS08sT0FDckI3QixLQUFLRixTQUFTd0IsR0FBTyxLQUNrQixJQUE5QnRCLEtBQUtGLFNBQVN3QixHQUFLTyxTQUM1QjdCLEtBQUtGLFNBQVN3QixHQUFPSixTQUFTQyxjQUFjRSxRQUtsRHJCLEtBQUs4QixtQkFHUEEsbUJBQ0U5QixLQUFLK0IsV0FBYSxHQUVsQi9CLEtBQUtHLGlCQUFtQjZCLElBQUloQyxLQUFLRixTQUFTSyxrQkFBa0JOLEdBQ25ELElBQUlvQyxVQUFNLENBQ2ZwQyxjQUlKRyxLQUFLK0IsV0FBV0csUUFBUWxDLEtBQUtHLGtCQUU3QkgsS0FBS0kscUJBQXVCNEIsSUFBSWhDLEtBQUtGLFNBQVNNLHNCQUFzQlAsR0FDM0QsSUFBSXNDLFVBQVUsQ0FDbkJ0QyxjQUlKRyxLQUFLK0IsV0FBV0csUUFBUWxDLEtBQUtJLHNCQUU3QkosS0FBS0ssaUJBQW1CMkIsSUFBSWhDLEtBQUtGLFNBQVNPLGtCQUFrQlIsR0FDbkQsSUFBSXVDLFVBQU0sQ0FDZnZDLGNBSUpHLEtBQUsrQixXQUFXRyxRQUFRbEMsS0FBS0ssa0JBRTdCTCxLQUFLTSxxQkFBdUIwQixJQUFJaEMsS0FBS0YsU0FBU1Esc0JBQXNCVCxHQUMzRCxJQUFJd0MsVUFBVSxDQUNuQnhDLGNBSUpHLEtBQUsrQixXQUFXRyxRQUFRbEMsS0FBS00sc0JBSS9CZ0MsT0FFRSxPQUFPLElBQUlDLFNBQVFDLElBRWpCeEMsS0FBS3lDLFlBQWNDLHFCQUVuQjFDLEtBQUt5QyxZQUFZRSxPQUFPM0MsS0FBS0gsUUFBUyxDQUNwQytDLFVBQVcsR0FFYixDQUNFQSxVQUFXLElBR2I1QyxLQUFLeUMsWUFBWUksTUFBS0MsSUFDcEI5QyxLQUFLK0Msb0JBQ0xQLFVBS05RLE9BQ0UsT0FBTyxJQUFJVCxTQUFRQyxJQUNqQnhDLEtBQUtpRCx1QkFFTGpELEtBQUtrRCxhQUFlUixxQkFFcEIxQyxLQUFLa0QsYUFBYUMsR0FBR25ELEtBQUtILFFBQVMsQ0FDakMrQyxVQUFXLEVBQ1hRLFdBQVlaLE9BS2xCekIsYUFBY3NDLEdBQ1osTUFBTSxPQUFFQyxHQUFXQyxJQUFlRixHQUVsQ3JELEtBQUtTLE9BQU9FLFFBQVUyQyxFQUd4QkUsV0FDTXhELEtBQUtGLFNBQVMyRCxVQUNoQnpELEtBQUtTLE9BQU9JLE1BQVFiLEtBQUtGLFNBQVMyRCxRQUFRQyxhQUFlbkMsT0FBT29DLGFBR2xFdkMsSUFBS3BCLEtBQUsrQixZQUFZNkIsR0FBYUEsRUFBVUosYUFHL0NLLFNBQ0U3RCxLQUFLUyxPQUFPRSxPQUFTK0Isc0JBQWlCLEVBQUcxQyxLQUFLUyxPQUFPSSxNQUFPYixLQUFLUyxPQUFPRSxRQUV4RVgsS0FBS1MsT0FBT0MsUUFBVWdDLDRCQUF1QjFDLEtBQUtTLE9BQU9DLFFBQVNWLEtBQUtTLE9BQU9FLE9BQVEsSUFFbEZYLEtBQUtTLE9BQU9DLFFBQVUsTUFDeEJWLEtBQUtTLE9BQU9DLFFBQVUsR0FHcEJWLEtBQUtGLFNBQVMyRCxVQUNoQnpELEtBQUtGLFNBQVMyRCxRQUFRSyxNQUFNOUQsS0FBS08saUJBQW9CLGVBQWNQLEtBQUtTLE9BQU9DLGNBS25GcUMsb0JBQ0V4QixPQUFPd0MsaUJBQWlCLFFBQVMvRCxLQUFLYyxtQkFHeENtQyx1QkFDRTFCLE9BQU95QyxvQkFBb0IsUUFBU2hFLEtBQUtjLHdCLHlCQ2hMN0NtRCxFQUFvQkMsRUFBSSxJQUFNIiwiZmlsZSI6Im1haW4uZmE1Y2UwNTg4YmNlMzFlOGRlNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcblxuaW1wb3J0IFRpdGxlIGZyb20gJ2FuaW1hdGlvbnMvVGl0bGUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ2FuaW1hdGlvbnMvUGFyYWdyYXBoJ1xuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnXG5pbXBvcnQgSGlnaGxpZ2h0cyBmcm9tICdhbmltYXRpb25zL0hpZ2hsaWdodHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcbiAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG4gICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICBhbmltYXRpb25zTGFiZWxzOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxuICAgICAgYW5pbWF0aW9uc0hpZ2hsaWdodHM6ICdbZGF0YS1hbmltYXRpb249XCJoaWdobGlnaHRcIl0nXG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cbiAgICB0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xuICAgICAgICBlbGVtZW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNUaXRsZXMpXG5cbiAgICB0aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuICAgICAgICBlbGVtZW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKVxuXG4gICAgdGhpcy5hbmltYXRpb25zTGFiZWxzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0xhYmVscywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IExhYmVsKHtcbiAgICAgICAgZWxlbWVudFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zTGFiZWxzKVxuXG4gICAgdGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNIaWdobGlnaHRzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgSGlnaGxpZ2h0KHtcbiAgICAgICAgZWxlbWVudFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cylcblxuICB9XG5cbiAgc2hvdyAoKSB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKF8gPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH1cblxuICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9XG5cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuICB9XG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA1NmM5Mzk3NGUyMjA3NjA0Y2EzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==