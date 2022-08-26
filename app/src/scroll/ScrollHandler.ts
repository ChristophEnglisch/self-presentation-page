import {ScrollDirection} from "@/scroll/ScrollDirection";
import ScrollToHandler from "@/scroll/ScrollToHandler";

class ScrollHandler
{
    private readonly moveCount = 30;

    private scrollToHandler: ScrollToHandler;

    private lastPosition = 0

    private direction : ScrollDirection = ScrollDirection.DOWN

    private counter = 0

    constructor(scrollToHandler : ScrollToHandler) {
        this.scrollToHandler = scrollToHandler;
        this.defineEvents()
    }

    public defineEvents(){
        window.addEventListener(
            'mousewheel',
            this.handleScroll.bind(this), {
                passive: false
            }
        )
    }

    private handleScroll() {
        const currentScrollDirection = this.determineDirection
        if (currentScrollDirection == this.direction) {
            this.counter++
        } else {
            this.counter = 0
        }
        if (this.counter >= this.moveCount){
            this.scrollToHandler.scrollToNextPage(this.direction)
            this.counter = 0
        }
        this.direction = currentScrollDirection
        this.lastPosition = window.scrollY
    }

    public get determineDirection() : ScrollDirection {
        return window.scrollY > this.lastPosition ? ScrollDirection.DOWN : ScrollDirection.UP;
    }
} export default ScrollHandler