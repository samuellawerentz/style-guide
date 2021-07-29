'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = ".sg.ant-btn.cnto-btn.contacto-button {\n  min-width: 60px;\n  padding: 8px 16px;\n  height: 36px;\n  line-height: 18px;\n  border: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center; }\n  .sg.ant-btn.cnto-btn.contacto-button--primary {\n    background-color: var(--primary-color);\n    color: var(--white); }\n    .sg.ant-btn.cnto-btn.contacto-button--primary:hover {\n      color: var(--white);\n      background-color: var(--primary-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--primary[disabled], .sg.ant-btn.cnto-btn.contacto-button--primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--primary-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--secondary {\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--secondary:hover {\n      color: var(--primary-color);\n      background-color: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--secondary[disabled], .sg.ant-btn.cnto-btn.contacto-button--secondary[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white);\n      border: 1px solid var(--primary-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--danger-primary {\n    color: var(--white);\n    background-color: var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-primary:hover {\n      color: var(--white);\n      background-color: var(--danger-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-primary[disabled], .sg.ant-btn.cnto-btn.contacto-button--danger-primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--danger-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--danger-secondary {\n    color: var(--danger-color);\n    border: 1px solid var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-secondary:hover {\n      color: var(--danger-color);\n      background-color: var(--danger-color-4);\n      border: 1px solid var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-secondary[disabled], .sg.ant-btn.cnto-btn.contacto-button--danger-secondary[disabled]:hover {\n      color: var(--danger-color-2);\n      border: 1px solid var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button--link {\n    color: var(--primary-color);\n    font-weight: 600; }\n    .sg.ant-btn.cnto-btn.contacto-button--link:hover {\n      color: var(--primary-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--link[disabled], .sg.ant-btn.cnto-btn.contacto-button--link[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button--link-danger {\n    color: var(--danger-color);\n    font-weight: 600; }\n    .sg.ant-btn.cnto-btn.contacto-button--link-danger:hover {\n      color: var(--danger-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--link-danger[disabled], .sg.ant-btn.cnto-btn.contacto-button--link-danger[disabled]:hover {\n      color: var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button--small {\n    height: 28px;\n    padding: 4px 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--with-icon {\n    padding-left: 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--table-action-link {\n    color: var(--secondary-text-color);\n    padding: 8px 0px;\n    padding-left: 0;\n    min-width: auto; }\n    .sg.ant-btn.cnto-btn.contacto-button--table-action-link:hover {\n      color: var(--primary-color); }\n  .sg.ant-btn.cnto-btn.contacto-button .contacto-icon {\n    margin-right: 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--only-icon {\n    padding: 8px;\n    min-width: auto;\n    width: auto; }\n    .sg.ant-btn.cnto-btn.contacto-button--only-icon .contacto-icon {\n      margin-right: 0; }\n      .sg.ant-btn.cnto-btn.contacto-button--only-icon .contacto-icon.small {\n        font-size: 20px; }\n";
styleInject(css_248z$a);

var _excluded$8 = ["type", "size", "label", "icon", "loading", "className"];
var BUTTON_TYPES = ['primary', 'secondary', 'danger-primary', 'danger-secondary', 'link', 'link-danger', 'table-action-link'];
var getButtonClassName = function getButtonClassName(type) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var icon = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;
  var onlyIcon = arguments.length > 4 ? arguments[4] : undefined;
  return ['sg', 'cnto-btn', 'contacto-button', "contacto-button--".concat(type), "contacto-button--".concat(size), icon ? "contacto-button--with-icon" : '', onlyIcon ? 'contacto-button--only-icon' : '', className].join(' ');
};
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      label = _ref.label,
      icon = _ref.icon,
      loading = _ref.loading,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$8);

  return /*#__PURE__*/React__default['default'].createElement(antd.Button, _extends({
    className: getButtonClassName(type, size, icon, className, !label && icon),
    icon: icon ? /*#__PURE__*/React__default['default'].createElement("span", {
      className: 'material-icons contacto-icon ' + size
    }, icon) : null,
    loading: loading
  }, props), label);
};
Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes__default['default'].oneOf(BUTTON_TYPES),
  className: PropTypes__default['default'].string,

  /**
   * How large should the button be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Button Text
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the button
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Activate the loading state and add a spinner icon
   */
  loading: PropTypes__default['default'].bool
};
Button.defaultProps = {
  size: 'default',
  type: 'primary'
};

var css_248z$9 = ".caption, .sg.contacto-typography--caption, .sg.contacto-typography--caption-bold, .sg.contacto-typography--caption-italic, .sg.contacto-typography--caption-capital {\n  font-size: 12px;\n  line-height: 18px; }\n\n.sg.contacto-typography--large-title {\n  font-size: 26px;\n  line-height: 38px;\n  font-weight: 400; }\n\n.sg.contacto-typography--title-1 {\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: 400; }\n\n.sg.contacto-typography--title-2 {\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: 400; }\n\n.sg.contacto-typography--title-3 {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400; }\n\n.sg.contacto-typography--headline {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600; }\n\n.sg.contacto-typography--subtitle {\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 500; }\n\n.sg.contacto-typography--body {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400; }\n\n.sg.contacto-typography--caption-bold {\n  font-weight: 600; }\n\n.sg.contacto-typography--caption-italic {\n  font-style: italic; }\n\n.sg.contacto-typography--caption-capital {\n  text-transform: uppercase;\n  font-weight: 600; }\n\n.sg.contacto-typography--primary {\n  color: var(--primary-color); }\n\n.sg.contacto-typography--secondary {\n  color: var(--secondary-text-color); }\n";
styleInject(css_248z$9);

var _excluded$7 = ["type", "children", "className", "variant"];
var TEXT_TYPES = ['large-title', 'title-1', 'title-2', 'title-3', 'headline', 'subtitle', 'body', 'caption', 'caption-bold', 'caption-italic', 'caption-capital'];
/**
 * Typography for Contacto Apps
 */

var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React__default['default'].createElement(antd.Typography.Text, _extends({
    className: ['sg', 'contacto-typography', 'contacto-typography--' + type, 'contacto-typography--' + variant, className].join(' ')
  }, props), children);
};
Text.propTypes = {
  /**
   * This indicates the type of the text that is to be used
   */
  type: PropTypes__default['default'].oneOf(TEXT_TYPES),

  /**
   * This indicates the children of the text node
   */
  children: PropTypes__default['default'].any,
  className: PropTypes__default['default'].string,

  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes__default['default'].string
};
Text.defaultProps = {
  type: 'body'
};

var css_248z$8 = ".sg.contacto-input-wrapper .contacto-input {\n  border-radius: 0;\n  box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n  border: 1px solid var(--border-color-1);\n  height: 36px;\n  padding-left: 12px; }\n  .sg.contacto-input-wrapper .contacto-input > * {\n    line-height: 20px; }\n  .sg.contacto-input-wrapper .contacto-input:hover, .sg.contacto-input-wrapper .contacto-input:active, .sg.contacto-input-wrapper .contacto-input:focus, .sg.contacto-input-wrapper .contacto-input[class*='focused'] {\n    box-shadow: none;\n    border: 1px solid var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input[class*='focused'] .contacto-icon {\n    color: var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input[disabled], .sg.contacto-input-wrapper .contacto-input[disabled]:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--gray-6);\n    box-shadow: none; }\n    .sg.contacto-input-wrapper .contacto-input[disabled]::placeholder, .sg.contacto-input-wrapper .contacto-input[disabled]:hover::placeholder {\n      color: var(--gray-2); }\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity) {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--small {\n    height: 28px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--search-box {\n    box-shadow: none;\n    padding-left: 8px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--no-shadow {\n    box-shadow: none; }\n\n.sg.contacto-input-wrapper .contacto-input-label-wrapper {\n  margin-bottom: 4px; }\n";
styleInject(css_248z$8);

var _excluded$6 = ["type", "label", "icon", "size", "disabled", "placeholder", "readOnly", "className"];
var TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow'];
/**
 * This is used to get text input from the user
 */

var TextField = function TextField(_ref) {
  var type = _ref.type,
      label = _ref.label,
      icon = _ref.icon,
      size = _ref.size,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$6);

  icon = type === 'search-box' ? 'search' : icon;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sg contacto-input-wrapper"
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-input-label-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React__default['default'].createElement(antd.Input, _extends({
    className: ['contacto-input', 'contacto-input--' + type, 'contacto-input--' + size, "".concat(readOnly ? 'contacto-input--readonly' : ''), className].join(' '),
    disabled: readOnly || disabled,
    placeholder: placeholder
  }, props, {
    prefix: icon ? /*#__PURE__*/React__default['default'].createElement("span", {
      className: "material-icons contacto-icon contacto-icon--input-prefix"
    }, icon) : null
  })));
};
TextField.propTypes = {
  /**
   * This indicates the type of textfield
   */
  type: PropTypes__default['default'].oneOf(TEXTFIELD_TYPES),
  className: PropTypes__default['default'].string,

  /**
   * How large should the textfield be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * Label for the Input
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes__default['default'].bool
};
TextField.defaultProps = {
  size: 'default',
  type: 'input'
};

var css_248z$7 = ".sg.contacto-card {\n  margin: 24px; }\n  .sg.contacto-card .ant-card-head {\n    padding: 0 16px; }\n  .sg.contacto-card .ant-card-body {\n    padding: 16px; }\n  .sg.contacto-card .contacto-table-wrapper {\n    margin: 0 -16px; }\n  .sg.contacto-card .contacto-card-subtitle {\n    white-space: normal;\n    padding-right: 32px; }\n  .sg.contacto-card.contacto-card-align-top .ant-card-head-wrapper {\n    align-items: flex-start; }\n";
styleInject(css_248z$7);

var _excluded$5 = ["className", "title", "subtitle", "actionButton", "topAlignButton"];

var Title = function Title(props) {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "title-2"
  }, props.text)), props.subtitle && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-card-subtitle"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    variant: "secondary"
  }, props.subtitle)));
};
/**
 * This is a layout that is mostly used in the center, when the screen has a table.
 */


var Card = function Card(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      actionButton = _ref.actionButton,
      topAlignButton = _ref.topAlignButton,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement(antd.Card, _extends({
    className: ['sg contacto-card', className, topAlignButton ? 'contacto-card-align-top' : ''].join(' ')
  }, props, {
    title: /*#__PURE__*/React__default['default'].createElement(Title, {
      text: title,
      subtitle: subtitle
    }),
    extra: actionButton || null
  }));
};
Card.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * Title of the card
   */
  title: PropTypes__default['default'].string,

  /**
   * Text rendered beneath the title
   */
  subtitle: PropTypes__default['default'].string,

  /**
   * The action button component. It must be a react component, usually, the Button component.
   */
  actionButton: PropTypes__default['default'].node,
  topAlignButton: PropTypes__default['default'].bool
};
Card.defaultProps = {};

var css_248z$6 = ".sg.contacto-checkbox,\n.sg.contacto-checkbox-group .ant-checkbox-wrapper {\n  line-height: 20px;\n  align-items: center; }\n  .sg.contacto-checkbox .ant-checkbox-indeterminate .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner {\n    background-color: var(--primary-color);\n    border-color: var(--primary-color); }\n    .sg.contacto-checkbox .ant-checkbox-indeterminate .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      background-color: var(--primary-color);\n      width: 2px;\n      height: 10px;\n      border-radius: 1px;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) scale(1) rotate(90deg);\n      background: white; }\n  .sg.contacto-checkbox .ant-checkbox,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox {\n    top: 0; }\n    .sg.contacto-checkbox .ant-checkbox-checked:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-checked:after {\n      border: none; }\n    .sg.contacto-checkbox .ant-checkbox-checked .ant-checkbox-inner,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-checked .ant-checkbox-inner {\n      border-color: var(--primary-color);\n      background-color: var(--primary-color); }\n  .sg.contacto-checkbox span,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper span {\n    line-height: 20px; }\n  .sg.contacto-checkbox:hover .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper:hover .ant-checkbox-inner {\n    border-color: var(--primary-color); }\n  .sg.contacto-checkbox .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner {\n    width: 18px;\n    height: 18px;\n    border-color: var(--gray-2);\n    border-width: 2px;\n    box-shadow: none; }\n    .sg.contacto-checkbox .ant-checkbox-inner:hover,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner:hover {\n      border-color: var(--primary-color); }\n    .sg.contacto-checkbox .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner:after {\n      background-color: var(--primary-color);\n      width: 6px;\n      height: 12px;\n      border-radius: 1px;\n      top: 6px;\n      left: 2px; }\n  .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-checked .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-checked .ant-checkbox-inner {\n    border-color: var(--primary-color-2) !important; }\n  .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner {\n    border-color: var(--gray-4) !important; }\n    .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner:after {\n      background-color: var(--primary-color-2); }\n  .sg.contacto-checkbox[class*=\"disabled\"] span,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] span {\n    color: var(--primary-text-color); }\n";
styleInject(css_248z$6);

var _excluded$4 = ["className"],
    _excluded2 = ["className"];
/**
 * Primary Checkbox Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/checkbox/#API for options
 */

var Checkbox = function Checkbox(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement(antd.Checkbox, _extends({
    className: ['sg contacto-checkbox', className].join(' ')
  }, props));
};

var CheckboxGroup = function CheckboxGroup(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React__default['default'].createElement(antd.Checkbox.Group, _extends({
    className: [className, 'sg', 'contacto-checkbox-group'].join(' ')
  }, props));
};

Checkbox.Group = CheckboxGroup;
Checkbox.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string
};

var css_248z$5 = ".sg.contacto-tag {\n  padding: 4px 8px;\n  border: none; }\n  .sg.contacto-tag .ant-typography {\n    color: inherit; }\n  .sg.contacto-tag--default {\n    background-color: var(--primary-color-4);\n    color: var(--primary-color); }\n  .sg.contacto-tag--success {\n    background-color: var(--success-color-4);\n    color: var(--success-color); }\n  .sg.contacto-tag--danger {\n    background-color: var(--danger-color-4);\n    color: var(--danger-color); }\n  .sg.contacto-tag--progress {\n    background-color: var(--primary-color-3);\n    color: var(--primary-color); }\n  .sg.contacto-tag--disabled {\n    background-color: var(--gray-5);\n    color: var(--secondary-text-color); }\n";
styleInject(css_248z$5);

var _excluded$3 = ["className", "type", "label"];
var TAG_TYPES = ['success', 'danger', 'disabled', 'progress', 'default'];
/**
 * Tag component that is used to specify status of a task
 */

var Tag = function Tag(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      type = _ref.type,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React__default['default'].createElement(antd.Tag, _extends({
    className: ['sg contacto-tag', className, "contacto-tag--".concat(type)].join(' ')
  }, props), /*#__PURE__*/React__default['default'].createElement(Text, {
    type: type === 'default' ? 'caption' : 'caption-capital'
  }, label));
};
Tag.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * The type of tag
   */
  type: PropTypes__default['default'].oneOf(TAG_TYPES),

  /**
   * The text to be displayed
   */
  label: PropTypes__default['default'].string
};
Tag.defaultProps = {
  type: 'default'
};

var css_248z$4 = ".sg.contacto-radio-input {\n  line-height: 20px;\n  align-items: center; }\n  .sg.contacto-radio-input .ant-radio {\n    top: 0; }\n    .sg.contacto-radio-input .ant-radio-checked .ant-radio-inner {\n      border-color: var(--primary-color); }\n  .sg.contacto-radio-input span {\n    line-height: 20px; }\n  .sg.contacto-radio-input:hover .ant-radio-inner {\n    border-color: var(--primary-color); }\n  .sg.contacto-radio-input .ant-radio-inner {\n    width: 20px;\n    height: 20px;\n    border-color: var(--gray-2);\n    border-width: 2px;\n    box-shadow: none; }\n    .sg.contacto-radio-input .ant-radio-inner:hover {\n      border-color: var(--primary-color); }\n    .sg.contacto-radio-input .ant-radio-inner:after {\n      background-color: var(--primary-color);\n      width: 10px;\n      height: 10px; }\n  .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-checked .ant-radio-inner {\n    border-color: var(--primary-color-2) !important; }\n  .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-inner {\n    border-color: var(--gray-4) !important; }\n    .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-inner:after {\n      background-color: var(--primary-color-2); }\n  .sg.contacto-radio-input[class*=\"disabled\"] span {\n    color: var(--primary-text-color); }\n";
styleInject(css_248z$4);

({
  className: PropTypes__default['default'].string
});

var css_248z$3 = ".sg.contacto-select-wrapper .contacto-select {\n  border-radius: 0;\n  box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n  border: 1px solid var(--border-color-1);\n  height: 36px;\n  width: 100%; }\n  .sg.contacto-select-wrapper .contacto-select:hover, .sg.contacto-select-wrapper .contacto-select:active, .sg.contacto-select-wrapper .contacto-select:focus, .sg.contacto-select-wrapper .contacto-select[class*='focused'] {\n    box-shadow: none;\n    border: 1px solid var(--primary-color); }\n  .sg.contacto-select-wrapper .contacto-select .ant-select-selector {\n    border: none; }\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-search-input,\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-placeholder {\n      height: 36px;\n      line-height: 36px; }\n  .sg.contacto-select-wrapper .contacto-select .ant-select-arrow {\n    margin-top: 0;\n    top: 0;\n    transform: translateY(50%);\n    right: 19px; }\n  .sg.contacto-select-wrapper .contacto-select[class*='focused'] .contacto-icon {\n    color: var(--primary-color); }\n  .sg.contacto-select-wrapper .contacto-select[disabled], .sg.contacto-select-wrapper .contacto-select[disabled]:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--gray-6);\n    box-shadow: none; }\n    .sg.contacto-select-wrapper .contacto-select[disabled]::placeholder, .sg.contacto-select-wrapper .contacto-select[disabled]:hover::placeholder {\n      color: var(--gray-2); }\n  .sg.contacto-select-wrapper .contacto-select--readonly:not(.increase-specificity) {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n\n.sg.contacto-select-wrapper .contacto-select-label-wrapper {\n  margin-bottom: 4px; }\n";
styleInject(css_248z$3);

var _excluded$2 = ["label", "icon", "disabled", "placeholder", "readOnly", "className"];
/**
 * This is used to select a value from the list of options
 */

var Select = function Select(_ref) {
  var label = _ref.label;
      _ref.icon;
      var disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'sg contacto-select-wrapper ' + className
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-select-label-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({
    className: "contacto-select ".concat(readOnly ? 'contacto-select--readonly' : ''),
    disabled: readOnly || disabled,
    placeholder: placeholder,
    suffixIcon: /*#__PURE__*/React__default['default'].createElement("span", {
      className: "material-icons contacto-icon--select-caret"
    }, "expand_more")
  }, props)));
};
Select.propTypes = {
  /**
   * How large should the textfield be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * Label for the Input
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string
};
Select.defaultProps = {
  size: 'default',
  type: 'input'
};

var css_248z$2 = ".sg.contacto-table .ant-pagination-item {\n  display: none; }\n\n.sg.contacto-table .ant-spin-blur {\n  overflow: visible; }\n\n.sg.contacto-table .ant-table-pagination.ant-pagination {\n  margin: 0;\n  position: absolute;\n  right: 16px;\n  align-items: center;\n  top: -16px;\n  transform: translateY(-100%); }\n  .sg.contacto-table .ant-table-pagination.ant-pagination .ant-pagination-total-text,\n  .sg.contacto-table .ant-table-pagination.ant-pagination .material-icons {\n    line-height: 36px;\n    height: 36px; }\n\n.sg.contacto-table .ant-pagination-prev,\n.sg.contacto-table .ant-pagination-next {\n  height: auto;\n  min-width: auto;\n  line-height: initial;\n  color: var(--gray-1); }\n  .sg.contacto-table .ant-pagination-prev.ant-pagination-disabled,\n  .sg.contacto-table .ant-pagination-next.ant-pagination-disabled {\n    color: var(--gray-3); }\n\n.sg.contacto-table .ant-pagination-total-text,\n.sg.contacto-table .ant-pagination-prev {\n  margin-right: 16px; }\n\n.sg.contacto-table .ant-table-thead > tr > th {\n  background: var(--gray-6);\n  color: var(--gray-1);\n  font-weight: 400;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n  .sg.contacto-table .ant-table-thead > tr > th:before {\n    display: none; }\n\n.sg.contacto-table .ant-table-tbody > tr.ant-table-row:hover > td {\n  background-color: var(--background-highlight-color); }\n";
styleInject(css_248z$2);

var _excluded$1 = ["className", "pagination"];
/**
 * Description
 */
// eslint-disable-next-line react/prop-types

var Table = function Table(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      pagination = _ref.pagination,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var modifiedPagination = _objectSpread2(_objectSpread2({}, pagination), {}, {
    showSizeChanger: false,
    showTotal: function showTotal(total, range) {
      return "".concat(range[0], "-").concat(range[1], " of ").concat(total);
    },
    itemRender: function itemRender(page, type, comp) {
      if (type === 'prev' || type === 'next') {
        return /*#__PURE__*/React__default['default'].createElement("span", {
          className: "material-icons"
        }, "navigate_".concat(type === 'prev' ? 'before' : type));
      }
    }
  });

  return /*#__PURE__*/React__default['default'].createElement(antd.Table, _extends({
    className: ['sg contacto-table', className].join(' '),
    pagination: pagination !== false && modifiedPagination
  }, props));
};
Table.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string
};

var css_248z$1 = ".sg.contacto-table-layout .contacto-table-layout--controls {\n  margin-bottom: 16px; }\n";
styleInject(css_248z$1);

/**
 * A common table layout
 *
 */

var TableLayout = function TableLayout(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      table = _ref.table,
      searchBar = _ref.searchBar,
      actionButtons = _ref.actionButtons;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: ['sg contacto-table-layout', className].join(' ')
  }, /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    justify: "space-between",
    className: "contacto-table-layout--controls"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Space, {
    direction: "horizontal",
    size: 16
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-table-layout--search-bar"
  }, searchBar), !!(actionButtons !== null && actionButtons !== void 0 && actionButtons.length) && actionButtons.map(function (actionButtons, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "contacto-table-layout--action-button",
      key: i
    }, actionButtons);
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-table-wrapper"
  }, table));
};
TableLayout.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,
  table: PropTypes__default['default'].node,
  searchBar: PropTypes__default['default'].node,
  pagination: PropTypes__default['default'].node,
  actionButtons: PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)
};

var css_248z = ".sg.contacto-sider.ant-layout-sider {\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.06) -3px 0px 6px;\n  padding: 32px 16px 16px; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-children {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  .sg.contacto-sider.ant-layout-sider.ant-layout-sider-collapsed {\n    padding: 32px 0 0; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-title, .sg.contacto-sider.ant-layout-sider .contacto-sider-content, .sg.contacto-sider.ant-layout-sider .contacto-sider-footer {\n    min-width: calc(464px - 32px);\n    max-width: calc(464px - 32px); }\n  .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding {\n    padding: 32px 0 0; }\n    .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-title, .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-content, .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-footer {\n      min-width: 464px;\n      max-width: 464px;\n      padding: 0 16px; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-content {\n    flex-grow: 1; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-title {\n    margin-bottom: 32px; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-footer {\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row-reverse; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-close-icon {\n    cursor: pointer; }\n";
styleInject(css_248z);

var _excluded = ["className", "noPadding", "title", "onClose", "children", "footerButtons"];
/**
 * Description
 */

var Sider = function Sider(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      noPadding = _ref.noPadding,
      title = _ref.title,
      onClose = _ref.onClose,
      children = _ref.children,
      footerButtons = _ref.footerButtons,
      props = _objectWithoutProperties(_ref, _excluded);

  var siderRef = React.useRef(null);
  React.useEffect(function () {
    siderRef.current && siderRef.current.parentElement.classList.add('ant-layout-has-sider');
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(antd.Layout.Sider, _extends({
    ref: siderRef,
    className: ['sg contacto-sider', className, noPadding ? 'contacto-sider--no-padding' : ''].join(' '),
    width: 464,
    collapsedWidth: 0
  }, props), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-sider-children"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-sider-title"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    justify: "space-between"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Col, {
    span: 22
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "title-2"
  }, title)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "material-icons contacto-sider-close-icon",
    onClick: onClose
  }, "close"))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-sider-content"
  }, children), !!(footerButtons !== null && footerButtons !== void 0 && footerButtons.length) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-sider-footer"
  }, footerButtons.map(function (button) {
    return button;
  }))));
};
Sider.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,
  noPadding: PropTypes__default['default'].bool,
  title: PropTypes__default['default'].string,
  onClose: PropTypes__default['default'].func,
  children: PropTypes__default['default'].any,
  footerButtons: PropTypes__default['default'].any
};
Sider.defaultProps = {};

exports.BUTTON_TYPES = BUTTON_TYPES;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Select = Select;
exports.Sider = Sider;
exports.TAG_TYPES = TAG_TYPES;
exports.TEXTFIELD_TYPES = TEXTFIELD_TYPES;
exports.TEXT_TYPES = TEXT_TYPES;
exports.Table = Table;
exports.TableLayout = TableLayout;
exports.Tag = Tag;
exports.Text = Text;
exports.TextField = TextField;
exports.getButtonClassName = getButtonClassName;
//# sourceMappingURL=index.js.map
