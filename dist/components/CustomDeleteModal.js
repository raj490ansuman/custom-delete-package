var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Modal } from "antd";
var StyledModal = styled(Modal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-modal-content {\n    border-top: 5px solid #e01e5a;\n    padding: 0;\n    border-radius: 8px;\n  }\n  .ant-modal-footer {\n    display: flex;\n    justify-content: center;\n    background-color: #f1f4f9;\n    padding: 10px;\n    gap: 8px;\n    border-radius: 8px;\n  }\n  .ant-modal-header {\n    border-bottom: none;\n    padding: 16px;\n    margin-bottom: 0;\n  }\n  .ant-modal-body {\n    border-bottom: none;\n    padding: 16px;\n    padding-top: 0;\n  }\n  p {\n    margin-top: 2px;\n  }\n"], ["\n  .ant-modal-content {\n    border-top: 5px solid #e01e5a;\n    padding: 0;\n    border-radius: 8px;\n  }\n  .ant-modal-footer {\n    display: flex;\n    justify-content: center;\n    background-color: #f1f4f9;\n    padding: 10px;\n    gap: 8px;\n    border-radius: 8px;\n  }\n  .ant-modal-header {\n    border-bottom: none;\n    padding: 16px;\n    margin-bottom: 0;\n  }\n  .ant-modal-body {\n    border-bottom: none;\n    padding: 16px;\n    padding-top: 0;\n  }\n  p {\n    margin-top: 2px;\n  }\n"])));
var CustomDeleteModal = function (_a) {
    var title = _a.title, content = _a.content, props = __rest(_a, ["title", "content"]);
    return (_jsx(StyledModal, __assign({ title: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#E01E5A]", children: _jsx("span", { className: "text-white", style: { fontSize: "16px" }, children: "!" }) }), _jsx("span", { className: "ml-2", children: title })] }) }, props, { children: _jsx("p", { className: "ml-2", children: content }) })));
};
export default CustomDeleteModal;
var templateObject_1;
