import {ScrollDirection} from "@/scroll/ScrollDirection";
import ScrollToHandler from "@/scroll/ScrollToHandler";

class ScrollHandler
{
    readonly moveCount = 5;

    private scrollToHandler: ScrollToHandler;

    private lastPosition = 0

    private direction : ScrollDirection = ScrollDirection.DOWN

    private counter = 0

    constructor(scrollToHandler : ScrollToHandler) {
        this.scrollToHandler = scrollToHandler
        window.addEventListener(
            'scroll',
            this.handleScroll
        );
    }

    private handleScroll() {
        const currentScrollDirection = window.scrollY > this.lastPosition ? ScrollDirection.DOWN : ScrollDirection.UP
        if (currentScrollDirection == this.direction) {
            this.counter++
        }
        if (this.counter >= this.moveCount){
            this.scrollToHandler.scrollToNextPage(this.direction)
        }
        this.direction = currentScrollDirection
        this.lastPosition = window.scrollY
    }

    public get determineDirection() : ScrollDirection {
        return  window.scrollY > this.lastPosition ? ScrollDirection.DOWN : ScrollDirection.UP;
    }
} export default ScrollHandler