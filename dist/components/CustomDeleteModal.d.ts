import React from "react";
import { ModalProps } from "antd";
interface CustomDeleteModalProps extends ModalProps {
    title: React.ReactNode;
    content: any;
}
declare const CustomDeleteModal: React.FC<CustomDeleteModalProps>;
export default CustomDeleteModal;
