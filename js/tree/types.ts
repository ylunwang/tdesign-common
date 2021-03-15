import { TreeNode } from './tree-node';

// ------ 自动规范类型 start -------

export type TreeNodeValue = string | number;

export interface KeysType {
  value?: string;
  label?: string;
  children?: string;
}

export interface TreeNodeState {
  /**
   * 节点是否允许被选中
   * @default false
   */
  checkable?: boolean;
  /**
   * 节点是否被选中
   * @default false
   */
  checked?: boolean;
  /**
   * 节点是否为半选中状态
   * @default false
   */
  indeterminate?: boolean;
  /**
   * 节点是否被禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 节点是否可视
   * @default false
   */
  visible?: boolean;
  /**
   * 子节点数据是否在加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 节点值
   */
  value?: TreeNodeValue;
  /**
   * 节点标签文案
   * @default ''
   */
  label?: string;
  /**
   * 节点是否已展开
   * @default false
   */
  expanded?: boolean;
  /**
   * 子节点是否互斥展开
   * @default false
   */
  expandMutex?: boolean;
  /**
   * 节点是否被激活
   * @default false
   */
  actived?: boolean;
  /**
   * 节点是否允许被激活
   * @default false
   */
  activable?: boolean;
};

export interface TreeNodeModel<DataOption extends TreeOptionData = TreeOptionData> extends TreeNodeState {
  /**
   * 节点数据
   */
  data: DataOption;
  /**
   * 当前节点是否处于高亮激活态
   */
  actived: boolean;
  /**
   * 当前节点是否展开
   */
  expanded: boolean;
  /**
   * 当前节点是否被选中
   */
  checked: boolean;
  /**
   * 当前节点是否处于半选状态
   */
  indeterminate: boolean;
  /**
   * 当前节点是否处于加载中状态
   */
  loading: boolean;
  /**
   * 获取节点全路径
   */
  getPathData: () => DataOption[];
  /**
   * 追加子节点数据
   */
  appendData: (data: DataOption | DataOption[]) => void;
  /**
   * 获取节点在父节点的子节点列表中的位置，如果没有父节点，则获取节点在根节点列表的位置
   */
  getIndex: () => number;
  /**
   * 获取节点所在的层级
   */
  getLevel: () => number;
  /**
   * 获取单个父节点
   */
  getParentData: () => DataOption;
  /**
   * 获取所有父节点
   */
  getParentsData: () => DataOption[];
  /**
   * 获取根节点
   */
  getRootData: () => DataOption;
  /**
   * 获取兄弟节点，包含自己在内
   */
  getSiblingsData: () => DataOption[];
  /**
   * 在当前节点前插入新节点
   */
  insertBefore: (newData: DataOption) => void;
  /**
   * 在当前节点前插入新节点
   */
  insertAfter: (newData: DataOption) => void;
  /**
   * 是否为兄弟节点中的第一个节点
   */
  isFirst: () => boolean;
  /**
   * 是否为兄弟节点中的最后一个节点
   */
  isLast: () => boolean;
  /**
   * 是否为叶子节点
   */
  isLeaf: () => boolean;
};

// ------ 自动规范类型 end -------

export type TypeTargetNode = TreeNodeValue | TreeNode;

export type TypeIdMap = Map<TreeNodeValue, boolean>;

export type TypeValueMode = 'all' | 'parentFirst' | 'onlyLeaf';

export type TypeTimer = number;

export interface ISettingOptions {
  directly?: boolean;
}

export interface IRelatedNodesOptions {
  withParents?: boolean;
}

export interface ITreeFilterOptions {
  level?: number;
  filter?: Function;
  props?: TreeNodeState;
}

export interface ITreeNodeData extends TreeNodeState {
  children?: ITreeNodeData[];
  [key: string]: unknown;
};

export type TypeTreeItem = ITreeNodeData | TreeNode;

export type ITreeNodeModel = TreeNodeModel<ITreeNodeData>

export interface ITreeEventState {
  node?: TreeNode;
  nodes?: TreeNode[];
  map?: TypeIdMap;
  data?: ITreeNodeData[];
}

export interface ITreeStoreOptions {
  // 自动生成的 value 的前缀
  prefix?: string;
  // 数据字段映射
  // keys?: { [key: string]: string };
  keys?: KeysType;
  // 是否展开全部
  expandAll?: boolean;
  // 初始展开级别
  expandLevel?: number;
  // 是否互斥展开(手风琴)
  expandMutex?: boolean;
  // 展开子节点时，是否展开父节点
  expandParent?: boolean;
  // 是否可高亮
  activable?: boolean;
  // 是否可多选高亮
  activeMultiple?: boolean;
  // 是否可选择
  checkable?: boolean;
  // 复选框不联动更新
  checkStrictly?: boolean;
  // 禁用整个树
  disabled?: boolean;
  // 节点加载函数
  load?: Function;
  // 是否延迟加载
  lazy?: boolean;
  // 取值方式，可选值 ['all', 'parentFirst', 'onlyLeaf']
  valueMode?: TypeValueMode;
  // 节点过滤函数
  // filter?: (node: TreeNode) => boolean;
  filter?: (node: TreeNodeModel<ITreeNodeData>) => boolean;
  // load函数运行后触发
  onLoad?: Function;
  // 节点增删改查后触发
  onReflow?: Function;
  // 节点信息变更后触发
  onUpdate?: Function;
}
