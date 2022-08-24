import {ScrollDirection} from "@/scroll/ScrollDirection";
import {Pages} from "@/model/Pages";

class ScrollToHandler
{
    private pages: Array<Pages>;

    private currentPage: Pages;

    constructor(pages: Array<Pages>) {
        this.pages = pages;
        this.currentPage = pages[0]
    }

    private getCurrentPage() : Pages {
        return this.currentPage
    }

    public scrollToNextPage(ScrollDirection: ScrollDirection) {
        
    }
} export default ScrollToHandler