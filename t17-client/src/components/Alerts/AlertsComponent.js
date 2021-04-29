import Swal from "sweetalert2";
import {
    CONFIRM_BUTTON,
    CONFIRM_BUTTON_CANCEL,
    INFO_TITLE,
    INFO_BUTTON,
    SUCCESS_TITLE,
    ERROR_TITLE,
    CONFIRM_TITLE
} from '../../constants/constants';

export const InfoAlertComponent = (text) => {
    return Swal.fire({
        title: "<strong>Info</strong>",
        text,
        icon: "info",
        html: INFO_TITLE,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: INFO_BUTTON,
    });
};

export const ErrorAlertComponent = (text) => {
    return Swal.fire({
        icon: "error",
        title: ERROR_TITLE,
        text
    });
};

export const SuccessAlertComponent = (text) => {
    return Swal.fire({
        icon: "success",
        title: SUCCESS_TITLE,
        text
    });
};

export const ConfirmAlertComponent = (text) => {
    return Swal.fire({
        title: CONFIRM_TITLE,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: CONFIRM_BUTTON,
        cancelButtonText: CONFIRM_BUTTON_CANCEL,
    });
};
