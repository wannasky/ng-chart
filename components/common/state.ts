
export enum State {
  WAITING,     // 默认状态
  SVGREADY,    // svg已创建
  DATAREADY,   // 数据已设置
  AXISREADY,   // 坐标轴已生成
  DATACHANGE,  // 数据发生变化
  RESIZE       // svg大小发生改变
}
