import {SimpleChanges} from "@angular/core";


/**
 * 图表（最外层container）AfterViewInit事件
 * 此事件包含ViewChange事件
 */
export class ViewReady {

  constructor(public props: SimpleChanges){}
}

/**
 * 图表（最外层container）props发生改变时发布此事件（AfterViewInit之后）
 */
export class ViewChange {

  constructor(public props: SimpleChanges, public changes: SimpleChanges){}
}

/**
 * 图表内部的部件（axis、tooltip等称之为部件）渲染完成事件
 */
export class GroupReady {

  constructor(public group: any) {}
}

/**
 * 图表内部的部件props发生改变事件
 */
export class GroupChange {

  constructor(public group: any, public props: SimpleChanges, public changes: SimpleChanges) {}

}

/**
 * 事件类型
 */
export type Event = ViewReady | ViewChange | GroupReady | GroupChange;
