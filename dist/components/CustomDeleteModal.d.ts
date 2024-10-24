import React from "react";
import { ModalProps } from "antd";
interface CustomDeleteModalProps extends ModalProps {
    title: React.ReactNode;
    content: string;
}
declare const CustomDeleteModal: React.FC<CustomDeleteModalProps>;
export default CustomDeleteModal;
