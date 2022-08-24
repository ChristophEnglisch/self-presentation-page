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
        if (scrollDirection === ScrollDirection.UP && this.pages.length < this.currentPageIndex) {
            this.currentPageIndex++
        }
        if (scrollDirection === ScrollDirection.DOWN && this.currentPageIndex != 0) {
            this.currentPageIndex--
        }
        this.scrollToElement(this.pages[this.currentPageIndex].id)
    }

    private scrollToElement(element: string) : void {
        const el = document.getElementById(element);
        if (el == null) {
            return;
        }
        el.scrollIntoView({behavior: "smooth"});
    }
} export default ScrollToHandler