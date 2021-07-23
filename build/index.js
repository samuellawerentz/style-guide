'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

var css_248z$2 = ".sg.contacto-button {\n  min-width: 80px;\n  padding: 8px 16px;\n  height: 36px;\n  line-height: 18px;\n  border: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center; }\n  .sg.contacto-button--primary {\n    background: var(--primary-color);\n    color: var(--white); }\n    .sg.contacto-button--primary:hover, .sg.contacto-button--primary:focus, .sg.contacto-button--primary:active {\n      color: var(--white);\n      background: var(--primary-color-5); }\n    .sg.contacto-button--primary[disabled], .sg.contacto-button--primary[disabled]:hover {\n      color: var(--white);\n      background: var(--primary-color-2); }\n  .sg.contacto-button--secondary {\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color); }\n    .sg.contacto-button--secondary:hover, .sg.contacto-button--secondary:focus, .sg.contacto-button--secondary:active {\n      color: var(--primary-color);\n      background: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n    .sg.contacto-button--secondary[disabled], .sg.contacto-button--secondary[disabled]:hover {\n      color: var(--primary-color-2);\n      background: var(--white);\n      border: 1px solid var(--primary-color-2); }\n  .sg.contacto-button--danger-primary {\n    color: var(--white);\n    background: var(--danger-color); }\n    .sg.contacto-button--danger-primary:hover, .sg.contacto-button--danger-primary:focus, .sg.contacto-button--danger-primary:active {\n      color: var(--white);\n      background: var(--danger-color-5); }\n    .sg.contacto-button--danger-primary[disabled], .sg.contacto-button--danger-primary[disabled]:hover {\n      color: var(--white);\n      background: var(--danger-color-2); }\n  .sg.contacto-button--danger-secondary {\n    color: var(--danger-color);\n    border: 1px solid var(--danger-color); }\n    .sg.contacto-button--danger-secondary:hover, .sg.contacto-button--danger-secondary:focus, .sg.contacto-button--danger-secondary:active {\n      color: var(--danger-color);\n      background: var(--danger-color-4);\n      border: 1px solid var(--danger-color); }\n    .sg.contacto-button--danger-secondary[disabled], .sg.contacto-button--danger-secondary[disabled]:hover {\n      color: var(--danger-color-2);\n      border: 1px solid var(--danger-color-2);\n      background: var(--white); }\n  .sg.contacto-button--link {\n    color: var(--primary-color);\n    font-weight: 600; }\n    .sg.contacto-button--link:hover, .sg.contacto-button--link:focus, .sg.contacto-button--link:active {\n      color: var(--primary-color-5); }\n    .sg.contacto-button--link[disabled], .sg.contacto-button--link[disabled]:hover {\n      color: var(--primary-color-2);\n      background: var(--white); }\n  .sg.contacto-button--link-danger {\n    color: var(--danger-color);\n    font-weight: 600; }\n    .sg.contacto-button--link-danger:hover, .sg.contacto-button--link-danger:focus, .sg.contacto-button--link-danger:active {\n      color: var(--danger-color-5); }\n    .sg.contacto-button--link-danger[disabled], .sg.contacto-button--link-danger[disabled]:hover {\n      color: var(--danger-color-2);\n      background: var(--white); }\n  .sg.contacto-button--small {\n    height: 28px;\n    padding: 4px 8px; }\n  .sg.contacto-button--with-icon {\n    padding-left: 8px; }\n  .sg.contacto-button .contacto-icon {\n    margin-right: 8px; }\n";
styleInject(css_248z$2);

var _excluded$2 = ["type", "size", "label", "icon", "loading"];
var BUTTON_TYPES = ['primary', 'secondary', 'danger-primary', 'danger-secondary', 'link'];
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      label = _ref.label,
      icon = _ref.icon,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React__default['default'].createElement(antd.Button, _extends({
    className: ['sg', 'contacto-button', "contacto-button--".concat(type), "contacto-button--".concat(size), icon ? "contacto-button--with-icon" : ''].join(' '),
    icon: icon ? /*#__PURE__*/React__default['default'].createElement("span", {
      className: 'material-icons contacto-icon ' + size
    }, "group_add") : null,
    loading: loading
  }, props), label);
};
Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes__default['default'].oneOf(BUTTON_TYPES),

  /**
   * How large should the button be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Button Text
   */
  label: PropTypes__default['default'].string.isRequired,

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
  type: 'primary',
  label: 'Button'
};

var css_248z$1 = ".contacto-typography--caption, .contacto-typography--caption-bold {\n  font-size: 12px;\n  line-height: 18px; }\n\n.contacto-typography--caption-bold {\n  font-weight: 600; }\n";
styleInject(css_248z$1);

var _excluded$1 = ["type", "children", "className"];
var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className;
      _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement(antd.Typography.Text, {
    className: ['contacto-typography', 'contacto-typography--' + type, className].join(' ')
  }, children);
};

var css_248z = ".sg.contacto-input-wrapper .contacto-input {\n  border-radius: 0;\n  box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n  border: 1px solid var(--border-color-1);\n  height: 36px;\n  padding-left: 12px; }\n  .sg.contacto-input-wrapper .contacto-input > * {\n    line-height: 20px; }\n  .sg.contacto-input-wrapper .contacto-input:hover, .sg.contacto-input-wrapper .contacto-input:active, .sg.contacto-input-wrapper .contacto-input:focus, .sg.contacto-input-wrapper .contacto-input[class*='focused'] {\n    box-shadow: none;\n    border: 1px solid var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input[class*='focused'] .contacto-icon {\n    color: var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input[disabled], .sg.contacto-input-wrapper .contacto-input[disabled]:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--gray-6);\n    box-shadow: none; }\n    .sg.contacto-input-wrapper .contacto-input[disabled]::placeholder, .sg.contacto-input-wrapper .contacto-input[disabled]:hover::placeholder {\n      color: var(--gray-2); }\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity) {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n\n.sg.contacto-input-wrapper .contacto-input-label-wrapper {\n  margin-bottom: 4px; }\n";
styleInject(css_248z);

var _excluded = ["type", "label", "icon", "disabled", "placeholder", "readOnly"];
var TEXTFIELD_TYPES = ['input', 'textarea'];
/**
 * This is used to get text input from the user
 */

var TextField = function TextField(_ref) {
  _ref.type;
      var label = _ref.label,
      icon = _ref.icon,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sg contacto-input-wrapper"
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-input-label-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React__default['default'].createElement(antd.Input, _extends({
    className: "contacto-input ".concat(readOnly ? 'contacto-input--readonly' : ''),
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

exports.BUTTON_TYPES = BUTTON_TYPES;
exports.Button = Button;
exports.TEXTFIELD_TYPES = TEXTFIELD_TYPES;
exports.Text = Text;
exports.TextField = TextField;
