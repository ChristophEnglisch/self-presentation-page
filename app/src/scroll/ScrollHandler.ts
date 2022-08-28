import {ScrollDirection} from "@/scroll/ScrollDirection";
import ScrollToHandler from "@/scroll/ScrollToHandler";

class ScrollHandler
{
    private readonly moveCount = 30;

    private scrollToHandler: ScrollToHandler;

    private direction : ScrollDirection = ScrollDirection.DOWN

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

    private handleScroll(e: WheelEvent) {
        const currentScrollDirection = this.determineDirection(e)
        if (currentScrollDirection !== ScrollDirection.NONE){
            this.scrollToHandler.scrollToNextPage(this.direction)
        }
        this.direction = currentScrollDirection
    }

    private determineDirection(wheelEvent: WheelEvent) : ScrollDirection {
        if (wheelEvent.deltaY > 30){
            return ScrollDirection.DOWN
        }
        if (wheelEvent.deltaY < -30){
            return ScrollDirection.UP
        }
        return ScrollDirection.NONE;
    }

} export default ScrollHandler