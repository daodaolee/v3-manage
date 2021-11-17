// $Icon 带有any，但是any不可以作为索引类型，所以包装了一层
import { createVNode, VNodeTypes } from "vue";
import * as $Icon from '@ant-design/icons-vue';

type TIconCtor = {
  [id: string]: VNodeTypes
}

const iconCtor = (): TIconCtor => {
  return $Icon
}

export const Icon = (props: { icon: string }) => {
  const { icon } = props;
  const iconObj = iconCtor()
  const result = iconObj[icon];
  return createVNode(result)
}