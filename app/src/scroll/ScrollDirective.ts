//import {DirectiveBinding} from "vue";

type ScrollToElement = HTMLElement

const vScroll = {

    handleScroll() {
        console.log('test')
    },

    created(el: ScrollToElement) {
        function handleScroll(){
            console.log('test')
        }
        el.addEventListener('scroll', handleScroll)
    }
}
export default vScroll
