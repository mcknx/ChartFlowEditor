import { h, RectNode, RectNodeModel } from 'chartflow-editor-core';

class MarkRootModel extends RectNodeModel {
  static extendKey = 'MarkRootModel';
  constructor(data, graphModel) {
    if (!data.text) {
      data.text = {
        x: data.x,
        y: data.y + 15,
        value: '',
      };
    }
    super(data, graphModel);
  }
  setAttributes() {
    this.height = 60;
    this.strokeWidth = 1;
    this.stroke = '#646764';
  }
}

class MarkRootView extends RectNode {
  static extendKey = 'MarkRoot';
  getLabelShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    return h(
      'svg',
      {
        x: x - width / 2 + 5,
        y: y - height / 2 + 5,
        width: 25,
        height: 25,
        viewBox: '0 0 1274 1024',
      },
      h('path', {
        fill: style.stroke,
        d:
          'M655.807326 287.35973m-223.989415 0a218.879 218.879 0 1 0 447.978829 0 218.879 218.879 0 1 0-447.978829 0ZM1039.955839 895.482975c-0.490184-212.177424-172.287821-384.030443-384.148513-384.030443-211.862739 0-383.660376 171.85302-384.15056 384.030443L1039.955839 895.482975z',
      }),
    );
  }
  getShape() {
    const style = this.props.model.getNodeStyle();
    const {
      x,
      y,
      width,
      height,
      radius,
    } = this.props.model;
    // todo: 将basic-shape对外暴露，在这里可以直接用。现在纯手写有点麻烦。
    return h('g', {}, [
      h('rect', {
        x: x - width / 2,
        y: y - height / 2,
        rx: radius,
        ry: radius,
        width,
        height,
        ...style,
      }),
      this.getLabelShape(),
      h(
        'text',
        {
          fill: style.stroke,
          fontSize: 12,
          x: x - width / 2 + 30,
          y: y - height / 2 + 20,
          width: 50,
          height: 25,
        },
        '中心主题',
      ),
    ]);
  }
}

const MarkRoot = {
  type: 'mark:root',
  view: MarkRootView,
  model: MarkRootModel,
};

export default MarkRoot;
