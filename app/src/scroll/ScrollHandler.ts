import {ScrollDirection} from "@/scroll/ScrollDirection";

class ScrollHandler
{
    private lastPosition = 0

    private scrollDirection?: ScrollDirection

    constructor() {
        window.addEventListener(
            'scroll',
            this.handleScroll
        );
    }

    handleScroll() {
        console.log(ScrollDirection.DOWN)
        this.lastPosition = window.scrollY
        console.log(window.scrollY > this.lastPosition ? ScrollDirection.DOWN : ScrollDirection.UP)
    }

    public determineDirection() : void {
        this.scrollDirection = window.scrollY > this.lastPosition ? ScrollDirection.DOWN : ScrollDirection.UP;
    }
} export default new ScrollHandler()