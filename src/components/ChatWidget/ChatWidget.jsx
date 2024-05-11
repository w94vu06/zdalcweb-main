import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// ShadowContent 组件用于在 Shadow DOM 中渲染内容
function ShadowContent({ root, children }) {
  return ReactDOM.createPortal(children, root);
}

// ShadowView 组件负责创建和管理 Shadow DOM
class ShadowView extends React.Component {
  constructor(props) {
    super(props);
    this.shadowRootRef = React.createRef();  // 创建一个 ref 用于访问 DOM 元素
  }

  componentDidMount() {
    // 仅当元素尚未有 shadowRoot 时创建新的 Shadow DOM
    if (this.shadowRootRef.current && !this.shadowRootRef.current.shadowRoot) {
      const shadowRoot = this.shadowRootRef.current.attachShadow({ mode: 'open' });
      this.props.innerRef(shadowRoot);  // 将 shadowRoot 传递给父组件
    }
  }

  render() {
    return <div ref={this.shadowRootRef}></div>;  // 创建一个 div 作为 Shadow DOM 的宿主
  }
}

// ChatWidget 组件负责加载和管理外部脚本
function ChatWidget() {
  const [shadowRoot, setShadowRoot] = useState(null);

  useEffect(() => {
    // 当 shadowRoot 可用且尚未加载脚本时，添加脚本
    if (shadowRoot) {
      const script = document.createElement('script');
      script.src = "http://192.168.1.177:32768/embed/anythingllm-chat-widget.min.js";
      script.async = true;
      script.setAttribute('data-embed-id', 'ff973cce-3add-4b41-8d92-6c897680d2c8');
      script.setAttribute('data-base-api-url', 'http://192.168.1.177:32768/api/embed');
      shadowRoot.appendChild(script);

      // 组件卸载时移除脚本
      return () => {
        if (shadowRoot && script.parentNode) {
          shadowRoot.removeChild(script);
        }
      };
    }
  }, [shadowRoot]);  // 依赖于 shadowRoot 的状态

  return <ShadowView innerRef={setShadowRoot} />;
}

export default ChatWidget;
