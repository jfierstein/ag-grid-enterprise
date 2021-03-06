// ag-grid-enterprise v9.0.3
import { IRangeController, RangeSelection, GridCell, AddRangeSelectionParams } from "ag-grid/main";
export declare class RangeController implements IRangeController {
    private loggerFactory;
    private gridPanel;
    private rowModel;
    private eventService;
    private columnController;
    private rowRenderer;
    private focusedCellController;
    private mouseEventService;
    private gridOptionsWrapper;
    private logger;
    private cellRanges;
    private activeRange;
    private lastMouseEvent;
    private bodyScrollListener;
    private dragging;
    private init();
    setRangeToCell(cell: GridCell): void;
    setRange(rangeSelection: AddRangeSelectionParams): void;
    addRange(rangeSelection: AddRangeSelectionParams): void;
    getCellRanges(): RangeSelection[];
    isEmpty(): boolean;
    isMoreThanOneCell(): boolean;
    clearSelection(): void;
    private onBodyScroll();
    isCellInAnyRange(cell: GridCell): boolean;
    private isCellInSpecificRange(cell, range);
    getCellRangeCount(cell: GridCell): number;
    private isRowInRange(rowIndex, floating, cellRange);
    onDragStart(mouseEvent: MouseEvent): void;
    private createNewActiveRange(cell);
    private selectionChanged(finished, started);
    private dispatchChangedEvent(finished, started);
    onDragStop(): void;
    onDragging(mouseEvent: MouseEvent): void;
    private updateSelectedColumns(columnFrom, columnTo);
}
