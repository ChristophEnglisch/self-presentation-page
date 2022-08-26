import {ScrollDirection} from "@/scroll/ScrollDirection";
import {Pages} from "@/model/Pages";

class ScrollToHandler
{
    private pages: Array<Pages>;

    private currentPageIndex = 0;

    constructor(pages: Array<Pages>) {
        this.pages = pages;
    }

    private getCurrentPage() : Pages {
        return this.pages[this.currentPageIndex]
    }

    public scrollToNextPage(scrollDirection: ScrollDirection) : void {
        if (scrollDirection === ScrollDirection.DOWN) {
            this.currentPageIndex++
        }
        if (scrollDirection === ScrollDirection.UP) {
            this.currentPageIndex--
        }
        console.log(this.currentPageIndex)
        this.scrollToElement(this.pages[this.currentPageIndex])
    }

    public scrollToElement(element: Pages) : void {
        const el = document.getElementById(element.id);
        if (el == null) {
            return;
        }
        el.scrollIntoView({behavior: "smooth"});
    }
} export default ScrollToHandler